
const generateValueWithinRange = (min, max, precision) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
};

exports.seed = function(knex) {
  return knex('usersReviews').del()
    .then(() => {
      // Find user Alan
      return knex('users').where({ name: 'Alan' }).first()
    })
    .then(alan => {
      // Insert reviews for first 5 movies in DB
      return knex('movies').select()
        .then(movies => {
          return Promise.all(movies.map(movie => {
            return knex('usersReviews').insert({
              user_id: alan.id,
              movie_id: movie.id,
              rating: generateValueWithinRange(1, 10, 0)
            });
          }));
        });
    });
};
