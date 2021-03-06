const express = require('express');
const routerV1 = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile-v1')[environment];
const databaseV1 = require('knex')(configuration);

// Body-checking middleware
const verifyBodyProperties = (propertiesToCheck) => {
  return function(request, response, next) {
    for (let requiredParameter of propertiesToCheck) {
      if (!request.body[requiredParameter]) return response.status(422).json({error: `You are missing a required parameter of ${requiredParameter}`});
    }
    next();
  }
};

// Check if user exists middleware
const checkIfUserExistsFromParam = (request, response, next) => {
  const { user_id } = request.params;

  databaseV1('users').where({ id: user_id })
    .then(users => {
      return users.length ? next() : response.status(404).json({ error: `No user found with id:${user_id}`});
    })
    .catch(error => response.status(500).json({ error }));
};

// Check if movie exists from request params or request body
const checkIfMovieExists = (idLocation) => {
  // idLocation should be either 'params' or 'body'
  return function(request, response, next) {
    const { movie_id } = request[idLocation];

    databaseV1('movies').where({id: movie_id})
      .then(movies => {
        return movies.length ? next() : response.status(404).json({ error: `No movie found with id:${movie_id}`});
      })
      .catch(error => response.status(500).json({ error }));
  }
};

// Calculate a movie's average review
const calculateAverageRatingForMovie = movie => {
  return databaseV1('usersReviews').where({movie_id: movie.id})
    .then(ratings => {
      if (ratings.length) {
        const ratingsSum = ratings.reduce((ratingsSum, rating) => {
          return ratingsSum += rating.rating;
        }, 0);

        movie.average_rating = ratingsSum/ratings.length;
      } else {
        movie.average_rating = null;
      }

      return movie;
    });
};

// POST to login user
routerV1.post('/login', verifyBodyProperties(['email', 'password']), (request, response) => {
  const { email, password } = request.body;

  databaseV1('users').where({ email, password })
    .then(users => {
      if (users.length) {
        const { id, name, email } = users[0];
        return response.status(201).json({ user: { id, name, email } });
      } else {
        return response.status(403).json({ error: 'Username or password is incorrect'});
      }
    })
    .catch(error => response.status(500).json({ error }));
});

// GET all movies and calculate average rating
routerV1.get('/movies', (request, response) => {
  databaseV1('movies').select()
    .then(movies => {
      // Iterate through each movie, calculate average rating, and then put that in with the movie data
      Promise.all(movies.map(movie => {
        return calculateAverageRatingForMovie(movie);
      }))
      .then(movies => response.status(200).json({ movies }))
    })
    .catch(error => response.status(500).json({ error }));
});

// GET a particular movie with it's average rating
routerV1.get('/movies/:movie_id', checkIfMovieExists('params'), (request, response) => {
  const { movie_id } = request.params;

  databaseV1('movies').where({id: movie_id})
    .then(movies => {
      return calculateAverageRatingForMovie(movies[0])
        .then(movie => {
          return response.status(200).json({ movie });
        })
    })
    .catch(error => response.status(500).json({ error }));
});

// GET all ratings for a user
routerV1.get('/users/:user_id/ratings', checkIfUserExistsFromParam, (request, response) => {
  const { user_id } = request.params;

  databaseV1('usersReviews').where({ user_id })
    .then(ratings => response.status(200).json({ ratings }))
    .catch(error => response.status(500).json({ error }));
});

// POST new rating for a user
routerV1.post('/users/:user_id/ratings', checkIfUserExistsFromParam, verifyBodyProperties(['movie_id', 'rating']), checkIfMovieExists('body'), (request, response) => {
  const { user_id } = request.params;
  const { movie_id, rating } = request.body;

  // Check that rating is integer between 1 and 10
  if (!Number.isInteger(rating) || rating < 1 || rating > 10 ) {
    return response.status(422).json({ error: 'Rating must be an integer between 1 and 10' });
  }

  // Check if there is already a rating for that movie from that user
  databaseV1('usersReviews').where({ user_id, movie_id })
    .then(reviews => {
      if (reviews.length) {
        return response.status(400).json({ error: `User (id=${user_id}) already has a review for movie (id=${movie_id}). To change the review, delete the existing review and submit a new review.`})
      } else {
        // Add rating for user
        databaseV1('usersReviews').insert({ user_id, movie_id, rating }, ['user_id', 'movie_id', 'rating'])
          .then(rating => response.status(201).json({ rating: rating[0] }))
          .catch(error => response.status(500).json({ error }));
      }
    })
    .catch(error => response.status(500).json({ error }));
});

// DELETE rating for a user
routerV1.delete('/users/:user_id/ratings/:rating_id', checkIfUserExistsFromParam, (request, response) => {
  const { user_id, rating_id } = request.params;

  databaseV1('usersReviews').where({ id: rating_id, user_id })
    .then(ratings => {
      // Check if there is a rating to delete
      if (!ratings.length) {
        return response.status(404).json({ error: `No rating found with id:${rating_id} for user_id:${user_id}`});
      } else {
        // Delete the rating
        databaseV1('usersReviews').where({ id: rating_id, user_id }).del()
          .then(() => response.sendStatus(204))
          .catch(error => response.status(500).json({ error }));
      }
    })
    .catch(error => response.status(500).json({ error }));
});

module.exports = { routerV1, databaseV1 };
