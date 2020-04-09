
// Movies from https://developers.themoviedb.org/3/movies/get-now-playing (1st page)
const fetch = require('node-fetch');
require('dotenv').config();

const fetchMovies = () => {
  const pages = [1, 2];

  const moviePagePromises = pages.map(pageNum => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_DB_APIKEY}&language=en-US&page=${pageNum}`)
      .then(response => response.json())
      .then(movieData => movieData.results)
  })
  return Promise.all(moviePagePromises)
    .then(moviePages => {
      return [].concat.apply([], moviePages).map(movie => {
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
  return fetchMovies()
    .then(cleanedMovies => {
      return knex('movies').insert(cleanedMovies);
    });
};
