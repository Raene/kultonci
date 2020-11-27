
exports.up = function(knex) {
  return knex.schema.createTable('nfp',function(table) {
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('user.id').onDelete('SET NULL');
    table.integer('initial_deposit').notNullable().defaultTo(0);
    table.integer('referral_withdrawals').notNullable().defaultTo(0);
    table.integer('pending_withdrawals').notNullable().defaultTo(0);
    table.integer('total_withdrawals').notNullable().defaultTo(0);
    table.integer('total_earnings').notNullable().defaultTo(0);
    table.integer('paid_earnings').notNullable().defaultTo(0);
    table.integer('compounded_earnings').notNullable().defaultTo(0);
    table.integer('referral_earnings').notNullable().defaultTo(0);
    table.integer('compounded_deposits').notNullable().defaultTo(0);
  });
};

exports.down = function(knex) {
  
};
