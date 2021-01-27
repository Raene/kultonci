exports.up = function(knex) {
    return knex.schema.table('user',function(table){
        table.string('dob');
    })
};

exports.down = function(knex) {
  
};