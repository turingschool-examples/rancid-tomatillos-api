# Instructor README

This document is meant for instructors maintaining the Rancid Tomatillos API. The API is hosted on Heroku using the instructors account.

## Seed Data

There is seed data in the `./db/v2/seeds/dev` directory that is used for both dev and production environments. The movie data is gathered from the Movie DB API using this endpoint: https://developers.themoviedb.org/3/movies/get-now-playing

There is a request that runs for the movies seed data. It requires a `.env` file with a MOVIE_DB_APIKEY key and the value is your own MovieDB key (this file is intentionally gitignored by default to not push up your API key). The `.env` file would look something like:

```
MOVIE_DB_APIKEY=yourAPIKeyValue
```

On Heroku, the `MOVIE_DB_APIKEY` is set as a [config var](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard).

## Knex Commands with Multiple DBs

Since knex has an assumed directory structure with one database and one configuration file, you need to point to the database/config file you want to use for any knex commands. For instance, rolling back a migration set:

`knex --knexfile=./knexfile-v2.js migrate:rollback`

And then running the migrations up to the latest migration:

`knex --knexfile=./knexfile-v2.js migrate:latest`

Where `v1` and `v2` would change. The same goes for database seed commands.

## Running Commands for Heroku

Using the Heroku CLI, login to the instructor Heroku account.

For any command you want to run, start with `heroku run "COMMAND HERE"`. For instance, to seed a database:

`heroku run "knex --knexfile=./knexfile-v2.js seed:run"`

## Random Error Middleware

There is a function in the v2 Router called `sendErrorReponseRandomly` where it will randomly send an error message based on the probability given to the middleware function. This can be helpful for making sure students handle errors in their applications gracefully.

If you pass in `200` to the middleware function, then there is about a 1-in-200 chance that the client will get an error as a response. The rest of the time, the response is sent as it normally would be - no error.

You can apply it to any route with the route-handler callback syntax. For instance:

```js
routerV2.get('/movies', sendErrorReponseRandomly(200), (request, response) => {
  // ... the rest of the router-handler code
});
```
