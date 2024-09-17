const { posters } = require('./movie_posters');
const { findMovie } = require('./movie_details');

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
app.patch('/api/v1/movies', (request, response) => {
  const movieToUpdate = request.body;

  for (let requiredParameter of ['id']) {
    if (!movieToUpdate[requiredParameter]) {
      response
        .status(422)
        .send({ error: `Expected format: { id: <String> }. You're missing the "${requiredParameter}" property.` });
      return
    }
  }

  const { id } = movieToUpdate;
  let vote_count;
  let foundMatch = false;

  posters.forEach(movie => {
    if (movie.id == id) {
      movie.vote_count++;
      vote_count = movie.vote_count;
      foundMatch = true;
    }
  })

  if (!foundMatch) {
    response.status(404).send({ error: `No movie found with an ID of ${id}. Try again with an existing movie ID.` });
    return;
  }

  response.status(200).send(posters);
});

// GET - MOVIE DETAILS
app.get('/api/v1/movies/:id', (request, response) => {
  const { id } = request.params;
  const movie = findMovie(id)

  response.status(200).json(movie);
});

// STATUS MESSAGE
app.listen(app.get('port'), () => {
  console.log(`Rancid Tomatillos API is running on http://localhost:${app.get('port')}.`);
});