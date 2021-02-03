
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('security_questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('security_questions').insert([
        {id: 1, question: 'what was your first car'},
        {id: 2, question: `what is your mother's maiden name`}
      ]);
    });
};
