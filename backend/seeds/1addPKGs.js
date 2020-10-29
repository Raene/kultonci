
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('investmentPKG').del()
    .then(function () {
      // Inserts seed entries
      return knex('investmentPKG').insert([
        {id: 1, name: 'daily investment packages'},
        {id: 2, name: 'weekly investment packages'},
        {id: 3, name: 'monthly compounding investment packages'}
      ]);
    });
};
