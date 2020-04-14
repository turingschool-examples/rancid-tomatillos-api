
// Movies from https://developers.themoviedb.org/3/movies/get-now-playing (1st page)
const fetch = require('node-fetch');
require('dotenv').config();

const fetchMoviesAndSupportingData = () => {
  const pages = [1, 2];
  // flattened array of movies
  const moviePagesPromise = Promise.all(pages.map(pageNum => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_DB_APIKEY}&language=en-US&page=${pageNum}`)
      .then(response => response.json())
      .then(movieData => movieData.results)
  }))
  .then(moviePages => [].concat.apply([], moviePages));

  // array of genres and associated ids
  const genresPromise = fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIE_DB_APIKEY}&language=en-US`)
    .then(response => response.json())
    .then(genreData => genreData.genres);

  return Promise.all([moviePagesPromise, genresPromise]);
};

const buildMovieData = moviesAndSupportingData => {
  const [movies, genres] = moviesAndSupportingData;

  return movies.map(movie => {
    const { id, title, overview, release_date } = movie;

    const full_poster_path = 'https://image.tmdb.org/t/p/original/' + movie.poster_path;
    let full_backdrop_path = 'https://image.tmdb.org/t/p/original/' + movie.backdrop_path;

    if (!movie.backdrop_path) {
      full_backdrop_path = 'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg';
    }

    return {
      id,
      poster_path: full_poster_path,
      backdrop_path: full_backdrop_path,
      title,
      overview,
      release_date
    };
  });
};

exports.seed = (knex) => {
  return fetchMoviesAndSupportingData()
    .then(moviesAndSupportingData => buildMovieData(moviesAndSupportingData))
    .then(cleanedMovies => {
      return knex('movies').insert(cleanedMovies);
    })
    .catch(err => console.log('Error seeding movies:', err));
};
