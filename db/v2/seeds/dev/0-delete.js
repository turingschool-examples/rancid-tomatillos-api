
exports.seed = function(knex) {
  return knex('usersReviews').del()
    .then(() => knex('movies_videos').del())
    .then(() => knex('movies').del())
    .then(() => knex('users').del())
};
