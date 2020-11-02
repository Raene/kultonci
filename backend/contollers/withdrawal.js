'use strict';
const Withdrawal = require('../models/WithdrawalModel');


exports.create = function (con) {
    return async(ctx)=>{
        try {
            let data = ctx.request.body;

            const withdrawal = new Withdrawal(data,con,'withdrawals');

            const payload = await withdrawal.create();
            ctx.body = {data: payload.insertId, success: true}
            ctx.status = 200;
        } catch (error) {
            console.log(error);
            ctx.throw(500, error);
        }
    }
}