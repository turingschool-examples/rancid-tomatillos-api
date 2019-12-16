# Rancid Tomatillos API

This is the back-end repo for the Rancid Tomatillos Front-End project. It is hosted on Heroku using the instructors account.

Documentation for the endpoints is found in the project spec.

## Seed Data

There is seed data in the `./db/seeds/dev` directory that is used for both dev and production environments. The movie data is gathered from the Movie DB API using this endpoint: https://developers.themoviedb.org/3/movies/get-now-playing

## To Do

* Refactor endpoint checks for valid user or move ids into middleware to clean up the endpoint functionality. It's very nested right now.
* Write function to clean movie data from the Movie DB API so that it does not require editing by hand
