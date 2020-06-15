const express = require('express');
const app = express();
const cors = require('cors');

const { routerV1, databaseV1 } = require('./routes/router-v1');
const { routerV2, databaseV2 } = require('./routes/router-v2');

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(express.json());

app.use('/api/v1', routerV1);
app.use('/api/v2', routerV2);

app.get('/', (request, response) => {
  response.status(200).json({hello: 'Head on over to /api/v2/movies to start getting movies'});
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(app.get('port'), () => {
    console.log(`Rancid Tomatillos backend server running on http://localhost:${app.get('port')}`);
  });
}

module.exports = {app, databaseV1, databaseV2};
