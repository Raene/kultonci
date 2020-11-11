
exports.up = function(knex) {
  return knex.schema.table('withdrawals',function(table){
  	table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  	table.timestamp('updated_at').defaultTo(knex.fn.now()).nullable();
  })
};

exports.down = function(knex) {
  
};
