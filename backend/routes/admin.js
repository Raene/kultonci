'use strict';

let controller = require('../contollers/admin');

exports.admin = function(router,con) {
    const route = new router({
        prefix: '/admin'
    });
    return route.post('/verifySub', controller.verifySub(con));
}