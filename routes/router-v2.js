const express = require('express');
const routerV2 = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile-v2')[environment];
const databaseV2 = require('knex')(configuration);

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

  databaseV2('users').where({ id: user_id })
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

    databaseV2('movies').where({id: movie_id})
      .then(movies => {
        return movies.length ? next() : response.status(404).json({ error: `No movie found with id:${movie_id}`});
      })
      .catch(error => response.status(500).json({ error }));
  }
};

// Calculate a movie's average review
const calculateAverageRatingForMovie = movie => {
  return databaseV2('usersReviews').where({movie_id: movie.id})
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

// Middleware to run probability function, and if it triggers, then send a non-200-level response
const sendErrorResponseRandomly = (chance) => {
  return function(request, response, next) {
    // a 1-in-"this value" chance of happening, if "chance" is 200, it's about a 1-in-200 chance
    const randomInteger = Math.floor(Math.random() * chance) + 1;

    if (randomInteger === 1) {
      return response.status(500).json({error: 'Looks like the server randomly gave an error. Sorry, but sometimes servers are not very reliable!'});
    }
    next();
  };
};

// POST to login user
routerV2.post('/login', verifyBodyProperties(['email', 'password']), (request, response) => {
  const { email, password } = request.body;

  databaseV2('users').where({ email, password })
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
routerV2.get('/movies', (request, response) => {
  databaseV2('movies').select()
    .then(movies => {
      // Iterate through each movie, calculate average rating, and then put that in with the movie data
      Promise.all(movies.map(movie => {
        return calculateAverageRatingForMovie(movie);
      }))
      .then(movies => {
        const strippedDetailsMovies = movies.map(movie => {
          const {id, poster_path, backdrop_path, title, average_rating, release_date} = movie;

          return {
            id,
            poster_path,
            backdrop_path,
            title,
            average_rating,
            release_date
          }
        });
        return response.status(200).json({ movies: strippedDetailsMovies })
      })
    })
    .catch(error => response.status(500).json({ error }));
});

// GET a particular movie with it's average rating
routerV2.get('/movies/:movie_id', checkIfMovieExists('params'), sendErrorResponseRandomly(500), (request, response) => {
  const { movie_id } = request.params;

  databaseV2('movies').where({id: movie_id})
    .then(movies => {
      return calculateAverageRatingForMovie(movies[0])
        .then(movie => {
          return response.status(200).json({ movie });
        })
    })
    .catch(error => response.status(500).json({ error }));
});

// GET videos for a particular movie
routerV2.get('/movies/:movie_id/videos', checkIfMovieExists('params'), (request, response) => {
  const { movie_id } = request.params;

  databaseV2('movies_videos').where({movie_id: movie_id})
    .then(videos => {
      return response.status(200).json({ videos });
    })
    .catch(error => response.status(500).json({ error }));
});

// GET all ratings for a user
routerV2.get('/users/:user_id/ratings', checkIfUserExistsFromParam, (request, response) => {
  const { user_id } = request.params;


  databaseV2('usersReviews').where({ user_id })
    .then(ratings => response.status(200).json({ ratings }))
    .catch(error => response.status(500).json({ error }));
});

// POST new rating for a user
routerV2.post('/users/:user_id/ratings', checkIfUserExistsFromParam, verifyBodyProperties(['movie_id', 'rating']), checkIfMovieExists('body'), sendErrorResponseRandomly(400), (request, response, next) => {
  const { user_id } = request.params;
  const { movie_id, rating } = request.body;

  // Check that rating is integer between 1 and 10
  if (!Number.isInteger(rating) || rating < 1 || rating > 10 ) {
    return response.status(422).json({ error: 'Rating must be an integer between 1 and 10' });
  }

  // Check if there is already a rating for that movie from that user
  databaseV2('usersReviews').where({ user_id, movie_id })
    .then(reviews => {
      if (reviews.length) {
        return response.status(400).json({ error: `User (id=${user_id}) already has a review for movie (id=${movie_id}). To change the review, delete the existing review and submit a new review.`})
      } else {
        // Add rating for user
        databaseV2('usersReviews').insert({ user_id, movie_id, rating }, ['user_id', 'movie_id', 'rating'])
          .then(rating => response.status(201).json({ rating: rating[0] }))
          .catch(error => response.status(500).json({ error }));
      }
    })
    .catch(error => response.status(500).json({ error }));
});

// DELETE rating for a user
routerV2.delete('/users/:user_id/ratings/:rating_id', checkIfUserExistsFromParam, (request, response) => {
  const { user_id, rating_id } = request.params;

  databaseV2('usersReviews').where({ id: rating_id, user_id })
    .then(ratings => {
      // Check if there is a rating to delete
      if (!ratings.length) {
        return response.status(404).json({ error: `No rating found with id:${rating_id} for user_id:${user_id}`});
      } else {
        // Delete the rating
        databaseV2('usersReviews').where({ id: rating_id, user_id }).del()
          .then(() => response.sendStatus(204))
          .catch(error => response.status(500).json({ error }));
      }
    })
    .catch(error => response.status(500).json({ error }));
});

module.exports = { routerV2, databaseV2 };
