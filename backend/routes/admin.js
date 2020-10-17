'use strict';

let controller = require('../contollers/admin');
const { login } = require('../contollers/auth');
let {loginRequired, isAdmin} = require('../middlewares/auth');

exports.admin = function(router,con) {
    const route = new router({
        prefix: '/admin'
    });
    return route.post('/verifySub',loginRequired,isAdmin,controller.verifySub(con));
}