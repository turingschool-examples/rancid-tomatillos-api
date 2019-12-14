const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.get('/', (request, response) => {
  response.status(200).json({hello: 'Head on over to /api/v1/movies to start getting movies'});
});

app.get('/api/v1/movies', (request, response) => {
  database('movies').select()
    .then(movies => response.status(200).json({ movies }))
    .catch(err => response.status(500).json({ error: err }));
});

app.listen(app.get('port'), () => {
  console.log(`Rotten Tomatillos backend server running on http://localhost:${app.get('port')}`);
});