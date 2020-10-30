
exports.up = function(knex) {
    return knex.schema.table('userInvestments',function (table) {
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('user.id').onDelete('SET NULL');
        });
};

exports.down = function(knex) {
  
};
