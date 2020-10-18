'use strict';
let UserInvestmentModel = require('../models/userInvestments');
let BTCModel  = require('../models/btcModel');


exports.verifySub = function (con) {
    return async (ctx) => {
        try {
            console.log(ctx.state);
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

exports.insertBTCaddr = function (con) {
    return async (ctx) => {
        try {
            const data = ctx.request.body;
            const btc = new BTCModel(data,con,'btc');
            await btc.create();

            ctx.body = {message: 'Address Created'}
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500, error.message);
        }
    }
}