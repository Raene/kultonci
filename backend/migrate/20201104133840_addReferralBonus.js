
exports.up = function(knex) {
    return knex.schema.table('packageLevels',function(table) {
        table.integer('referral_bonus');
    });
};

exports.down = function(knex) {
  
};
