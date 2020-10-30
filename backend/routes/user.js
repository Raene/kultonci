let controller = require('../contollers/user');
let userInvestment = require('../contollers/userInvestment');
let {loginRequired} = require('../middlewares/auth');

exports.users = function(router, con) {
    const route = new router({
        prefix: '/server/user'
    });

    return route.post('/createDeposit',loginRequired, controller.createDeposit(con))
        .get('/investments/:id',loginRequired, userInvestment.getInvestments(con));
}