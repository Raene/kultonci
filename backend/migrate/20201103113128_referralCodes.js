
exports.up = function(knex) {
  return knex.schema.table('user',function(table) {
      table.string('referral');
      table.unique('referral');

  });
};

exports.down = function(knex) {
  
};
