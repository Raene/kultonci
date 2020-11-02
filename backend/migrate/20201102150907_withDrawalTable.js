
exports.up = function(knex) {
  return knex.schema.createTable('withdrawals',function (table) {
      table.increments('id').primary();
      table.integer('total_withdrawals');
      table.integer('pending_withdrawals');
      table.integer('referral_withdrawals');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user.id').onDelete('SET NULL');
  })
};

exports.down = function(knex) {
  
};
