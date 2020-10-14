'use strict';
let UserInvestmentModel = require('../models/userInvestments');


exports.verifySub = function (con) {
    return async (ctx) => {
        try {
            const data = ctx.request.body;
            
            const userInvestment = new UserInvestmentModel(data,con,'userInvestments')

            const payload = await userInvestment.create()
            ctx.body = {data: payload, success: true}
        } catch (error) {
            console.log(error);
            ctx.throw(500, error);
        }
    }
}