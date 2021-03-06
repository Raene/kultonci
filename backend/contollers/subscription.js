'use strict';

const BTCModel = require('../models/btcModel');
const SubModel = require('../models/subscription');

exports.subscribe = function (con) {
    return async (ctx) => {
        try {
            //const id = ctx.params.id;
            const sub = new SubModel({},con,'investmentPKG');
            let payload ={}
            payload.subscription = await sub.get();
            console.log(payload.subscription);
            
            const BTC = new BTCModel({},con,'btc');
            payload.btc = await BTC.GetLatest()
            ctx.body = {data: payload, success:true}
            ctx.status = 200;   
        } catch (error) {
            ctx.throw(500,error);
        }
    }
};

exports.getPKGByValue = function (con) {
    return async (ctx) => {
        try {
            const id = ctx.params.id;
            const sub = new SubModel({},con,'investmentPKG');
            let payload ={}
            payload.subscription = await sub.getByParam(id,'investmentPKG.name');
            console.log(payload.subscription);
            
            const BTC = new BTCModel({},con,'btc');
            payload.btc = await BTC.GetLatest()
            ctx.body = {data: payload, success:true}
            ctx.status = 200;   
        } catch (error) {
            ctx.throw(500,error);
        }
    }
};