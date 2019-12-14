
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('email');
      table.string('password');
    }),

    knex.schema.createTable('movies', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('poster_path');
      table.string('release_date');
      table.text('overview');
    }),    

    knex.schema.createTable('moviesReviews', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('users.id');
      table.integer('movie_id').unsigned().references('movies.id');
      table.integer('rating');
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('moviesReviews'),
    knex.schema.dropTable('movies'),
    knex.schema.dropTable('users')
  ]);
};
