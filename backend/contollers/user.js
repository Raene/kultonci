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
            const data = ctx.request.body;
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