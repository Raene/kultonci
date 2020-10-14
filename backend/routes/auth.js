'use strict';

let controller = require('../contollers/auth');
const UserSchemaValidator = require('../middlewares/UserSchemaValidator');

exports.auth = function(router,con) {
    const route = new router({
        prefix: '/auth'
    });
    return route.post('/register', UserSchemaValidator,controller.register(con))
                 .post('/login',controller.login(con))
                 .get('/:id',controller.get(con));
}