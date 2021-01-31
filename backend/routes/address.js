'use strict';

let controller = require('../contollers/address');

exports.address = function (router,con) {
    const route = new router({
        prefix: '/server/address'
    });
    return route.get('/:id',controller.getByUserId(con))
}