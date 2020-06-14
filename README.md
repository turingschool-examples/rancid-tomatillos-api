# Rancid Tomatillos API

This is the back-end repo for the Rancid Tomatillos Front-End project. It is hosted on Heroku using the instructors account.

Documentation for the endpoints is found in the project spec.

## Seed Data

There is seed data in the `./db/seeds/dev` directory that is used for both dev and production environments. The movie data is gathered from the Movie DB API using this endpoint: https://developers.themoviedb.org/3/movies/get-now-playing

There is a request that runs for the movies seed data. It requires a `.env` file with a MOVIE_DB_APIKEY key and the value is your own MovieDB key (this file is intentionally gitignored by default to not push up your API key). The `.env` file would look something like:

```
MOVIE_DB_APIKEY=yourAPIKeyValue
```

## Knex Commands with Multiple DBs

`knex --knexfile=./knexfile-v2.js migrate:make initial`
