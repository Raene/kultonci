
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('packageLevels').del()
    .then(function () {
      // Inserts seed entries
      return knex('packageLevels').insert([
        {
          id: 1,
          name: 'bronze',
          minprice: 2500,
          maxprice: 4999,
          percentageReturns: 1,
          investmentPkg_id: 1,
          referral_bonus:5
        },
        {
          id: 2,
          name: 'silver',
          minprice: 5000,
          maxprice: 9999,
          percentageReturns: 1.5,
          investmentPkg_id: 1,
          referral_bonus:7
        },
        {
          id: 3,
          name: 'gold',
          minprice: 10000,
          maxprice: 19999,
          percentageReturns: 2,
          investmentPkg_id: 1,
          referral_bonus:10
        },
        {
          id: 4,
          name: 'bronze',
          minprice: 2000,
          maxprice: 4999,
          percentageReturns: 10,
          investmentPkg_id: 2,
          referral_bonus:5
        },
        {
          id: 5,
          name: 'silver',
          minprice: 5000,
          maxprice: 19999,
          percentageReturns: 15,
          investmentPkg_id: 2,
          referral_bonus:7
        },
        {
          id: 6,
          name: 'gold',
          minprice: 20000,
          maxprice: 29999,
          percentageReturns: 20,
          investmentPkg_id: 2,
          referral_bonus:10
        },
        {
          id: 7,
          name: 'diamond',
          minprice: 30000,
          maxprice: 350000,
          percentageReturns: 25,
          investmentPkg_id: 2,
          referral_bonus:15
        },
        {
          id: 8,
          name: 'bronze',
          minprice: 2000,
          maxprice: 3999,
          percentageReturns: 11,
          investmentPkg_id: 3,
          referral_bonus:5
        },
        {
          id: 9,
          name: 'silver',
          minprice: 4000,
          maxprice: 7999,
          percentageReturns: 13,
          investmentPkg_id: 3,
          referral_bonus:7
        },
        {
          id: 10,
          name: 'gold',
          minprice: 8000,
          maxprice: 11999,
          percentageReturns: 16,
          investmentPkg_id: 3,
          referral_bonus:10
        },
        {
          id: 11,
          name: 'diamond',
          minprice: 12000,
          maxprice: 15999,
          percentageReturns: 19,
          investmentPkg_id: 3,
          referral_bonus:15
        },
      ]);
    });
};
