
exports.up = function(knex) {
  return knex.schema.createTable('security_questions', function (table) {
      table.increments('id').primary();
      table.string('question');
  })
};

exports.down = function(knex) {
  
};

//what was your first car
//what is your mother's maiden name