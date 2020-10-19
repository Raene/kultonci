module.exports = [ {
    name: 'dailyInvestmentJobs',
    cron: '0 0 * * *'
  },{
    name: 'dailyInvestmentGold',
    cron: '0 0 * * *'
  },{
    name: 'dailyInvestmentSilver',
    cron: '0 0 * * *'
  },{
    name: 'weeklyInvestmentJobs',
    cron: '0 0 * * 0'
  },
  {
    name: 'weeklyInvestmentDiamond',
    cron: '0 0 * * 0'
  },
  {
    name: 'weeklyInvestmentSilver',
    cron: '0 0 * * 0'
  },
  {
    name: 'weeklyInvestmentGold',
    cron: '0 0 * * 0'
  },{
    name: 'monthlyInvestmentJobs',
    cron: '0 0 * * 0'
  },{
    name: 'monthlyInvestmentJobsSilver',
    cron: '0 0 * * 0'
  },{
    name: 'monthlyInvestmentJobsGold',
    cron: '0 0 * * 0'
  },{
    name: 'monthlyInvestmentJobsDiamond',
    cron: '0 0 * * 0'
  }];