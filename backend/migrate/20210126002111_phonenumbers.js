
exports.up = function(knex) {
    return knex.schema.table('user',function(table){
        table.string('phone');
        table.unique('phone');
    })
};

exports.down = function(knex) {
  
};
