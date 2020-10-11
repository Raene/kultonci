'use strict';

let controller = require('../contollers/auth');
const UserSchemaValidator = require('../middlewares/UserSchemaValidator');

exports.auth = function(router,con) {
    var router = new router({
        prefix: '/auth'
    });
    return router.post('/register', UserSchemaValidator,controller.register(con))
                 .post('/login',controller.login(con))
                 .get('/:id',controller.get(con));
}