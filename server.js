const { posters, findMoviePoster } = require('./movie_posters');
const { findMovieDetails } = require('./movie_details');

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');

app.set('port', process.env.PORT || 3001);
app.use(cors());

// GET - ALL MOVIE POSTERS
app.get('/api/v1/movies', (request, response) => {
  response.status(200).json(posters);
});

// PATCH - UPVOTE A MOVIE
app.patch('/api/v1/movies/:id', (request, response) => {
  const { id } = request.params;
  const movie = findMoviePoster(id);

  if (!movie) {
    response.status(404).send({ error: `No movie found with an ID of ${id}. Try again with an existing movie ID.` });
    return;
  }

  const body = request.body;

  if (body.vote_direction === 'up') {
    movie.vote_count++;
  } else if (body.vote_direction === 'down') {
    movie.vote_count--;
  } else {
    response.status(400).send({ error: `Expected body: { vote_direction: 'up' or 'down' }` });
    return;
  }

  response.status(200).json(movie);
});

// GET - MOVIE DETAILS
app.get('/api/v1/movies/:id', (request, response) => {
  const { id } = request.params;
  const movie = findMovieDetails(id);

  if (!movie) {
    response.status(404).send({ error: `No movie found with an ID of ${id}. Try again with an existing movie ID.` });
    return;
  }

  response.status(200).json(movie);
});

// STATUS MESSAGE
app.listen(app.get('port'), () => {
  console.log(`Rancid Tomatillos API is running on http://localhost:${app.get('port')}.`);
});