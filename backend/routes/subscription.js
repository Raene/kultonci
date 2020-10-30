'use strict';

let controller = require('../contollers/subscription');
let userInvestment = require('../contollers/userInvestment');

exports.subscription = function (router,con) {
   const route = new router({
       prefix: '/server/subscription'
   });
   return route.get('/', controller.subscribe(con))
               .get('/:id', controller.getPKGByValue(con));
}