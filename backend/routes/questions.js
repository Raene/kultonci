'use strict';

let controller = require('../contollers/question');

exports.questions = function(router,con) {
    const route = new router({
        prefix: '/server/security-questions'
    });
    return route.get('/',controller.getAll(con))
                .get('/:id',controller.getById(con))
}