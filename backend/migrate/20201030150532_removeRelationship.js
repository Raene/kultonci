
exports.up = function(knex) {
  return knex.schema.table('userInvestments',function (table) {
    table.dropForeign('user_id','userInvestments_user_id_fk')
  });
};

exports.down = function(knex) {
  
};
