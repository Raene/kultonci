'use strict';
const UserModel = require('../models/UserModel');
let UserInvestmentModel = require('../models/userInvestments');

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

exports.getAllreferrals = function (con) {
    return async(ctx) => {
        try {
            const user = new UserModel({},null,con,'user');
            const id = ctx.params.id;
            let payload = await user.getByValue(id,'referee_id');
            ctx.body = {success: true, data: payload};
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500,error.message);
        }
    }
}

exports.getUserById = function (con) {
    return async(ctx) => {
        try {
            const id = ctx.params.id;
            const user = new UserModel({},null,con,'user');
            let payload = await user.getUserByJoin(id,'user.id');
            ctx.body = {success: true, data: payload};
            ctx.status = 200;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

exports.createDeposit = function (con) {
    return async (ctx) => {
        try {
            let data = ctx.request.body;
            let initial = data.initial_deposit
            data.total_deposit = initial
            data.locked_deposit =initial
            const userInvestment = new UserInvestmentModel(data,con,'userInvestments')
             const payload = await userInvestment.create()
             ctx.body = {data: payload.insertId, success: true}
             ctx.status = 200;
        } catch (error) {
            console.log(error);
            ctx.throw(500, error);
        }
    }
}

exports.updateDeposit = function (con) {
    return async (ctx) => {
        try {
            let data = ctx.request.body;

            console.log("data req: " + JSON.stringify(data));
            
            data.compounded_deposits = data.compounded_deposits + data.amount;

            data.locked_deposit = data.compounded_deposits + data.locked_deposit

            data.total_deposit = data.total_deposit + data.amount;

            delete data.amount
            const userInvestment = new UserInvestmentModel(data,con,'userInvestments')
            await userInvestment.update(data.id,'id');
            ctx.body = {message: 'update succesful'};
             ctx.status = 200;
        } catch (error) {
            console.log(error);
            ctx.throw(500, error);
        }
    }
}