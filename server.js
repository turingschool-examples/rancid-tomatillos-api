const express = require('express');
const app = express();
const cors = require('cors');

const { v1Router, v1Database } = require('./routes/v1');

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(express.json());

app.use('/api/v1', v1Router);

app.get('/', (request, response) => {
  response.status(200).json({hello: 'Head on over to /api/v1/movies to start getting movies'});
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(app.get('port'), () => {
    console.log(`Rotten Tomatillos backend server running on http://localhost:${app.get('port')}`);
  });
}

module.exports = {app, v1Database};
