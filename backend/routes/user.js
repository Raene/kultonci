let controller = require('../contollers/user');
let userInvestment = require('../contollers/userInvestment');
let {loginRequired} = require('../middlewares/auth');

exports.users = function(router, con) {
    const route = new router({
        prefix: '/server/user'
    });

    return route.post('/createDeposit',controller.createDeposit(con))
        .post('/updateDeposit',controller.updateDeposit(con))
        .post('/updatepassword',controller.updatePassword(con))
        .get('/referrals/:id',controller.getAllreferrals(con))
        .get('/investments/:id',userInvestment.getInvestments(con));
}