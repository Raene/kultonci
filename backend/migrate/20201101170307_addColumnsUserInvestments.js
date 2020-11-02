
exports.up = function(knex) {
    return knex.schema.table('userInvestments',function (table) {
        table.integer('referral_withdrawals').notNullable().defaultTo(0)
        table.integer('pending_withdrawals').notNullable().defaultTo(0)
        table.integer('total_withdrawals').notNullable().defaultTo(0);
        table.renameColumn('earnings','total_earnings');
        table.integer('paid_earnings').notNullable().defaultTo(0)
        table.integer('compounded_earnings').notNullable().defaultTo(0)
        table.integer('referral_earnings').notNullable().defaultTo(0)
        table.integer('compounded_deposits').notNullable().defaultTo(0)
        });
};

exports.down = function(knex) {
  
};
//initial_deposit
//locked_deposits
//compounded_deposits
//total_deposits