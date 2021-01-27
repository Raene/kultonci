
exports.up = function(knex) {
  return knex.schema.createTable('questions_user',function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('user.id').onDelete('CASCADE')
      table.string('answer');
      table.integer('security_questions_id').unsigned().notNullable();
    })
};

exports.down = function(knex) {
  
};
