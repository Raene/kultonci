
exports.up = function(knex) {
  return knex.schema.createTable('address', function (table) {
     table.increments('id').primary(); 
     table.string('address');
     table.string('city');
     table.string('state');
     table.string('country');
     table.string('zip');
     table.integer('user_id').unsigned().notNullable();
     table.foreign('user_id').references('user.id').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  
};
