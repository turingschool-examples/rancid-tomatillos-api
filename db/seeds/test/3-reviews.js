
const generateValueWithinRange = (min, max, precision) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
};

exports.seed = function(knex) {
  return knex('users').where({ name: 'Alan' }).first()
    .then(alan => {
      // Insert reviews for all movies in DB (only for Alan)
      return knex('movies').select()
        .then(movies => {
          return Promise.all(movies.map(movie => {
            return knex('usersReviews').insert({
              user_id: alan.id,
              movie_id: movie.id,
              rating: 5
            });
          }));
        })
        .then(() => {
          return knex('users').where({ name: 'Sam' }).first()
            .then(sam => {
              // Insert reviews for all movies in DB (only for Sam)
              return knex('movies').select()
                .then(movies => {
                  return Promise.all(movies.map(movie => {
                    return knex('usersReviews').insert({
                      user_id: sam.id,
                      movie_id: movie.id,
                      rating: 10
                    });
                  }));
                });
        })
      })
    })

    // Reviews should average to be 7.5
};
