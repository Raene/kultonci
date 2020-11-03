'use strict';
const Withdrawal = require('../models/WithdrawalModel');


exports.create = function (con) {
    return async (ctx) => {
        try {
            let data = ctx.request.body;

            const withdrawal = new Withdrawal(data, con, 'withdrawals');

            const payload = await withdrawal.create();
            ctx.body = { data: payload.insertId, success: true }
            ctx.status = 200;
        } catch (error) {
            console.log(error);
            ctx.throw(500, error);
        }
    }
}

exports.get = function (con) {
    return async (ctx) => {
        try {
            const id = ctx.params.id;
            const valueType = ctx.query['type'];

            const withdrawal = new Withdrawal({}, con, 'withdrawals');
            let payload = await withdrawal.getAllById(id, valueType)

            ctx.body = { data: payload, success: true }
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500, error);
        }
    }
}

exports.update = function (con) {
    return async (ctx) => {
        try {
            let data = ctx.request.body;

            const withdrawal = new Withdrawal(data, con, 'withdrawals');

            await withdrawal.update(data.id, 'id');
            ctx.body = { message: 'Update succesful' };
            ctx.status = 200;
        } catch (error) {
            console.log(error);
            ctx.throw(500, error);
        }
    }
}