
exports.up = function(knex) {
  return knex.schema.alterTable('user',function(table){
  	table.dropUnique('ssn', 'user_ssn_unique');
  })
};

exports.down = function(knex) {
  
};
