let controller = require('../contollers/payment');
let {loginRequired} = require('../middlewares/auth');

exports.payment = function (router,con) {
    const route = new router({
        prefix: '/server/payment'
    });
    return route.post('/proofOfPayment',loginRequired,controller.proofOfPayment(con))
                .get('/fetch',loginRequired,controller.fetchProofsOfPayment(con))
                .get('/fetch/:id',loginRequired,controller.fetchProofsOfPaymentById(con));
}