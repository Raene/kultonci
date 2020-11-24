
exports.up = function(knex) {
    return knex.schema.table('nfp',function(table) {
        table.integer('locked_deposit');
    });
};

exports.down = function(knex) {
  
};
