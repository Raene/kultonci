
exports.up = function(knex) {
  return knex.schema.table('userInvestments',function (table) {
    table.dropForeign('user_id')
  });
};

exports.down = function(knex) {
  
};
