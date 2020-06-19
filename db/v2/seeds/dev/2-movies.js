
// Movies from https://developers.themoviedb.org/3/movies/get-now-playing (it is paginated)
const fetch = require('node-fetch');
require('dotenv').config();

const fetchIndividualMovieDetails = movies => {
  const moviePromises = movies.map(movie => {
    return fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.MOVIE_DB_APIKEY}&language=en-US`)
      .then(response => response.json())
      .then(movieDetails => {
        return { ...movie, ...movieDetails };
      });
  });

  return Promise.all(moviePromises);
}

const fetchMovies = () => {
  const pages = [1, 2];
  // flattened array of movies
  return Promise.all(pages.map(pageNum => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_DB_APIKEY}&language=en-US&page=${pageNum}`)
      .then(response => response.json())
      .then(movieData => movieData.results)
  }))
  .then(moviePages => [].concat.apply([], moviePages))
  .then(movies => fetchIndividualMovieDetails(movies));
};

const extractNamesFromGenresList = genreIdsAndNames => {
  return genreIdsAndNames.map(genreIdAndName => {
    return genreIdAndName.name;
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

const buildMovieData = movies => {

  return movies.map(movie => {
    const { id, title, overview, release_date, genres, budget, revenue, runtime, tagline } = movie;

    const cleanedGenres = extractNamesFromGenresList(genres);
    const { full_poster_path, full_backdrop_path } = formatImageURLs(movie);

    return {
      id,
      poster_path: full_poster_path,
      backdrop_path: full_backdrop_path,
      title,
      overview,
      release_date,
      genres: JSON.stringify(cleanedGenres),
      budget,
      revenue,
      runtime,
      tagline
    };
  });
};

const insertVideos = (knex, videoData) => {
  // videData is an array of arrays
  return Promise.all(videoData.map(videoSet => {
    if (videoSet) {
      return Promise.all(videoSet.map(video => {
        return knex('movies_videos').insert({
          movie_id: video.id,
          key: video.key,
          site: video.site,
          type: video.type
        });
      }));
    }
  }));
};

const fetchVideos = movies => {
  return Promise.all(movies.map(movie => {
    return fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.MOVIE_DB_APIKEY}&language=en-US`)
      .then(response => response.json())
      .then(videoData => {
        if (videoData.results.length) {
          return videoData.results.map(result => {
            const { key, site, type } = result;
            return { id: movie.id, key, site, type };
          });
        } else {
          return null;
        }
      });
  }));
};

const addVideosForMovies = knex => {
  return knex('movies').select('id').then(movieIDs => {
    return fetchVideos(movieIDs)
      .then(videoData => insertVideos(knex, videoData));
  });
};

exports.seed = (knex) => {
  return fetchMovies()
    .then(movies => buildMovieData(movies))
    .then(cleanedMovies => {
      return knex('movies').insert(cleanedMovies);
    })
    .then(() => {
      return addVideosForMovies(knex);
    })
    .catch(err => console.log('Error seeding movies:', err));
};
