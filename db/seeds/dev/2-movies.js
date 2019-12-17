
// Movies from https://developers.themoviedb.org/3/movies/get-now-playing (1st page)
const fetch = require('node-fetch');
require('dotenv').config();

const fetchMovies = () => {
  return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_DB_APIKEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(movies => {
      return movies.results.map(movie => {
        const { title, overview, release_date } = movie;

        return {
          poster_path: "https://image.tmdb.org/t/p/original/" + movie.poster_path,
          backdrop_path: "https://image.tmdb.org/t/p/original/" + movie.backdrop_path,
          title,
          overview,
          release_date
        };
      });
    });
};

exports.seed = (knex) => {
  return knex('movies').del()
    .then(() => {
      return fetchMovies()
        .then(cleanedMovies => {
          return knex('movies').insert(cleanedMovies);
        })
    });
};
