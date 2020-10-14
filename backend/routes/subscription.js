'use strict';

let controller = require('../contollers/subscription');
let userInvestment = require('../contollers/userInvestment');

exports.subscription = function (router,con) {
   const route = new router({
       prefix: '/subscription'
   });
   return route.get('/:id', controller.subscribe(con))
               .get('/investments/:id', userInvestment.getInvestments(con));
}