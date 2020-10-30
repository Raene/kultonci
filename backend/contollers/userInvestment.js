'use strict';
let UserInvestmentModel = require('../models/userInvestments');

exports.getInvestments = function (con) {
    return async (ctx) => {
        try {
            const  id = ctx.params.id;
            const valueType = ctx.query['type'];
            const userInvestments = new UserInvestmentModel({},con,'userInvestments');

            let payload = await userInvestments.get(id, valueType);

            ctx.body = {data: payload, success:true}
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500,error);
        }
    }
}