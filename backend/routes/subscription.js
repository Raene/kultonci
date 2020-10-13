'use strict';

let controller = require('../contollers/subscription')

exports.subscription = function (router,con) {
   const route = new router({
       prefix: '/subscription'
   });
   return route.get('/:id', controller.subscribe(con));
}