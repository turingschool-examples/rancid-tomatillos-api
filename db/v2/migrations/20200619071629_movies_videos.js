
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies_videos', function(table){
      table.increments('id').primary();
      table.integer('movie_id').unsigned().references('movies.id');
      table.string('key');
      table.string('site');
      table.string('type');
    })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies_videos')
};
