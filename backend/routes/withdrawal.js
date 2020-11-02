'use strict';

let controller = require('../contollers/withdrawal');
let {loginRequired} = require('../middlewares/auth');

exports.withdrawal =function (router,con) {
    const route = new router({
        prefix: '/server/withdrawal'
    });

    return route.post('/',controller.create(con))
                .get('/:id',controller.get(con))
                .post('/update',controller.update(con));
}