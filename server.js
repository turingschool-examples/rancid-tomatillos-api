const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (requst, response) => {
  response.status(200).json({hello: 'Head on over to /api/v1/movies to start getting movies'});
});

app.get('api/v1/movies', (request, resoonse) => {
  
});

app.listen(app.get('port'), () => {
  console.log(`Rotten Tomatillos backend server running on http://localhost:${app.get('port')}`);
});