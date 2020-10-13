'use strict';

const SubModel = require('../models/subscription');

exports.subscribe = function (con) {
    return async (ctx) => {
        try {
            const id = ctx.params.id;
            const sub = new SubModel({},con,'investmentPKG');
            let payload ={}
            payload.subscription = await sub.get(id,'id');
            console.log(process.env.BTC_ADDRESS)
            payload.btc = process.env.BTC_ADDRESS
            ctx.body = {data: payload, sucsess:true}
            ctx.status = 200;   
        } catch (error) {
            ctx.throw(500,error);
        }
    }
};