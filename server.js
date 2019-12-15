const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(express.json());

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.get('/', (request, response) => {
  response.status(200).json({hello: 'Head on over to /api/v1/movies to start getting movies'});
});

// Body-checknig middleware
const verifyBodyProperties = (propertiesToCheck) => {
  return function(request, response, next) {
    for (let requiredParameter of propertiesToCheck) {
      if (!request.body[requiredParameter]) return response.status(422).json({error: `You are missing a required parameter of ${requiredParameter}`});
    }
    next();
  }
};

// Users
app.post('/api/v1/login', verifyBodyProperties(['email', 'password']), (request, response) => {
  const { email, password } = request.body;

  database('users').where({ email, password })
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

app.get('/api/v1/movies', (request, response) => {
  database('movies').select()
    .then(movies => response.status(200).json({ movies }))
    .catch(error => response.status(500).json({ error }));
});

app.listen(app.get('port'), () => {
  console.log(`Rotten Tomatillos backend server running on http://localhost:${app.get('port')}`);
});
