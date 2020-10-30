let controller = require('../contollers/user');
let userInvestment = require('../contollers/userInvestment');

exports.users = function(router, con) {
    const route = new router({
        prefix: '/server/user'
    });

    return route.post('/createDeposit', controller.createDeposit(con))
        .get('/investments/:id', userInvestment.getInvestments(con));
}