
exports.up = function(knex) {
    return knex.schema.table('nfp',function(table) {
        table.integer('total_deposit');
    });
};

exports.down = function(knex) {
  
};
