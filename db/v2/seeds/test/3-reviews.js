exports.seed = function(knex) {
  return Promise.all([
    knex('users').where({ name: 'Alan' }).first(),
    knex('users').where({ name: 'Sam' }).first()
  ])
  .then(users => {
    const [alan, sam] = users;

    return knex('movies').select()
      .then(movies => {
        return Promise.all(movies.map(movie => {
          return knex('usersReviews').insert([
            {
              user_id: alan.id,
              movie_id: movie.id,
              rating: 5
            },
            {
              user_id: sam.id,
              movie_id: movie.id,
              rating: 10
            }
          ]);
        }));
      });
    // Reviews should average to be 7.5
  });
};
