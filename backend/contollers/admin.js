'use strict';
let UserInvestmentModel = require('../models/userInvestments');
let BTCModel  = require('../models/btcModel');
const UserModel = require('../models/UserModel');


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

exports.getAllUsers = function (con) {
    return async (ctx) => {
        try {
            const user = new UserModel({},null,con,'user');
            let payload = await user.getAll();
            ctx.body = {success: true, data: payload};
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500, error.message);
        }
    }
}

exports.getUserById = function (con) {
    return async(ctx) => {
        try {
            const id = ctx.params.id;
            const user = new UserModel({},null,con,'user');
            let payload = await user.getByValue(id,'id');
            ctx.body = {success: true, data: payload};
            ctx.status = 200;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

exports.verifyUser = function (con) {
    return async (ctx) => {
        try {
            const data = ctx.request.body;
            const user = new UserModel({},null,con,'user');
            let payload = await user.update('verified','id',true,data.id);
            ctx.body = {success: true, data: payload};
            ctx.status = 200;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}