
exports.up = function(knex) {
  return knex.schema.table('movies', function(table){
    table.integer('budget').unsigned();
    table.integer('revenue').unsigned();
    table.integer('runtime').unsigned();
    table.string('tagline');
  });
};

exports.down = function(knex) {
  return knex.schema.table('movies', function(table){
    table.dropColumn('budget');
    table.dropColumn('revenue');
    table.dropColumn('runtime');
    table.dropColumn('tagline');
  });
};
