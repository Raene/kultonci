
exports.up = function(knex) {
  return knex.schema.table('userInvestments',function (table) {
      table.integer('initial_deposit').notNullable().defaultTo(0);
  })
};

exports.down = function(knex) {
  
};
