
exports.up = function(knex) {
    return knex.schema.alterTable('userInvestments',function(table) {
        table.decimal('initial_deposit',10,5).notNullable().defaultTo(0).alter();
        table.decimal('referral_withdrawals',10,5).notNullable().defaultTo(0).alter();
        table.decimal('pending_withdrawals',10,5).notNullable().defaultTo(0).alter();
        table.decimal('total_withdrawals',10,5).notNullable().defaultTo(0).alter();
        table.decimal('total_earnings',10,5).notNullable().defaultTo(0).alter();
        table.decimal('paid_earnings',10,5).notNullable().defaultTo(0).alter();
        table.decimal('compounded_earnings',10,5).notNullable().defaultTo(0).alter();
        table.decimal('referral_earnings',10,5).notNullable().defaultTo(0).alter();
        table.decimal('compounded_deposits',10,5).notNullable().defaultTo(0).alter();  
      })
};

exports.down = function(knex) {
  
};
