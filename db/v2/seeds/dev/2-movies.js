
// Movies from https://developers.themoviedb.org/3/movies/get-now-playing (it is paginated)
const fetch = require('node-fetch');
require('dotenv').config();

const fetchIndividualMovieDetails = movies => {
  const moviePromises = movies.map(movie => {
    return fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.MOVIE_DB_APIKEY}&language=en-US`)
      .then(response => response.json())
      .then(movieDetails => {
        const { budget, revenue, runtime, tagline } = movieDetails;
        return {...movie, budget, revenue, runtime, tagline };
      })
  });

  return Promise.all(moviePromises);
}

const fetchMoviesAndSupportingData = () => {
  const pages = [1, 2];
  // flattened array of movies
  const moviesPromise = Promise.all(pages.map(pageNum => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_DB_APIKEY}&language=en-US&page=${pageNum}`)
      .then(response => response.json())
      .then(movieData => movieData.results)
  }))
  .then(moviePages => [].concat.apply([], moviePages))
  .then(movies => fetchIndividualMovieDetails(movies));

  // array of genres and associated ids
  const genresPromise = fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIE_DB_APIKEY}&language=en-US`)
    .then(response => response.json())
    .then(genreData => genreData.genres);

  return Promise.all([moviesPromise, genresPromise]);
};

const replaceGenreIdsWithGenreName = (movieGenreIds, genreIdsAndNames) => {
  return movieGenreIds.map(movieGenreId => {
    const matchingGenre = genreIdsAndNames.find(genreIdAndName => genreIdAndName.id === movieGenreId);
    return matchingGenre.name;
  });
};

const formatImageURLs = movie => {
  const full_poster_path = 'https://image.tmdb.org/t/p/original/' + movie.poster_path;
  let full_backdrop_path = 'https://image.tmdb.org/t/p/original/' + movie.backdrop_path;

  if (!movie.backdrop_path) {
    full_backdrop_path = 'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg';
  }

  return { full_poster_path, full_backdrop_path }
};

const buildMovieData = moviesAndSupportingData => {
  const [movies, genreIdsAndNames] = moviesAndSupportingData;

  return movies.map(movie => {
    const { id, title, overview, release_date, genre_ids, budget, revenue, runtime, tagline } = movie;

    const genres = replaceGenreIdsWithGenreName(genre_ids, genreIdsAndNames);
    const { full_poster_path, full_backdrop_path } = formatImageURLs(movie);

    return {
      id,
      poster_path: full_poster_path,
      backdrop_path: full_backdrop_path,
      title,
      overview,
      release_date,
      genres: JSON.stringify(genres),
      budget,
      revenue,
      runtime,
      tagline
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
