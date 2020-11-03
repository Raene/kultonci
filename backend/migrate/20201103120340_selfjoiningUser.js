
exports.up = function(knex) {
    return knex.schema.table('user',function(table) {
        table.integer('referee_id').unsigned();
        table.foreign('referee_id').references('user.id').onDelete('SET NULL').onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  
};
