let controller = require('../contollers/payment');

exports.payment = function (router,con) {
    const route = new router({
        prefix: '/server/payment'
    });
    return route.post('/proofOfPayment',controller.proofOfPayment(con))
                .get('/fetch',controller.fetchProofsOfPayment(con))
                .get('/fetch/:id',controller.fetchProofsOfPaymentById(con));
}