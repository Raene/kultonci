
exports.up = function(knex) {
    return knex.schema.table('nfp',function(table) {
        table.increments('id').primary();
    });
};

exports.down = function(knex) {
  
};
