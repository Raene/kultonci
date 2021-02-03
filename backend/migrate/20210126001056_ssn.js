
exports.up = function(knex) {
    return knex.schema.table('user',function(table){
        table.string('ssn');
        table.unique('ssn');
    })
};

exports.down = function(knex) {
  
};
