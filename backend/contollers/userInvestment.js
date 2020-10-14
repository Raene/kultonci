'use strict';

let UserInvestmentModel = require('../models/userInvestments');

exports.getInvestments = function (params) {
    return async (ctx) => {
        try {
            const  id = ctx.params.id;
            const userInvestments = new UserInvestmentModel({},con,'userInvestmens');

            let payload = await userInvestments.get(id, 'id');

            ctx.body = {data: payload, success:true}
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500,error);
        }
    }
}