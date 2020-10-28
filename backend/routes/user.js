let controller = require('../contollers/user');

exports.users = function(router,con) {
    const route = new router({
        prefix: '/server/user'
    }); 

    return route.post('/createDeposit',controller.createDeposit(con));
}