module.exports = [ {
    name: 'dailyInvestmentJobs',
    cron: '0 0 * * *'
  },{
    name: 'weeklyInvestmentJobs',
    cron: '0 0 * * 0'
  },{
    name: 'monthlyInvestmentJobs',
    cron: '0 0 1 * *'
  }];