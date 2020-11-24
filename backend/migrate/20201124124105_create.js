
exports.up = function(knex) {
    return knex.schema.table('nfp',function(table) {
      table.timestamps(false,true);  
    })
};

exports.down = function(knex) {
  
};
