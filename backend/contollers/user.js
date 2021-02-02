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
            return;
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
            return;
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
            return;
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
            // if (data.package_name == 'nfp') {
            //  delete data.package_name
            //  const userInvestment = new UserInvestmentModel(data,con,'nfp')
            //  const payload = await userInvestment.create()
            //  console.log(payload);
            //  ctx.body = {data: payload.insertId, success: true}
            //  ctx.status = 200;
            //  return                
            // }
            const userInvestment = new UserInvestmentModel(data,con,'userInvestments')
             const payload = await userInvestment.create()
             ctx.body = {data: payload.insertId, success: true}
             ctx.status = 200;
             return;
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

            data.updated_at    = new Date().toISOString().replace('T',' ').replace('Z','');
        
            const userInvestment = new UserInvestmentModel(data,con,'userInvestments')
            await userInvestment.update(data.id,'id');
            ctx.body = {message: 'update succesful'};
             ctx.status = 200;
             return;
        } catch (error) {
            console.log(error);
            ctx.throw(500, error);
        }
    }
}

exports.updateUser = function (con) {
    return async (ctx) =>{
        try {
            let data = ctx.request.body;
            data.updated_at    = new Date().toISOString().replace('T',' ').replace('Z','');
            if (myObj.hasOwnProperty('password')){
                delete data.password;
            }

            const user = new UserModel(data,null,con,'user');
            await user.updateDynamic(data.id,'id');
            ctx.body = {message: 'update succesful'};
            ctx.status = 200;
            return;
        } catch (error) {
            console.log(error);
            ctx.throw(500, error);
        }
    }
}

exports.updatePassword = function (con) {
    return async (ctx) => {
        try {
            let data = ctx.request.body;
            data.updated_at    = new Date().toISOString().replace('T',' ').replace('Z','');
            const user = new UserModel(data,null,con,'user');
            await user.updatePassword(data.id,'id');
            ctx.body = {message: 'update succesful'};
            ctx.status = 200;
            return;
        } catch (error) {
            console.log(error)
            ctx.throw(500,error);
        }
    }
}

exports.updateEmail = function (con) {
    return async (ctx) => {
        try {
            let data = ctx.request.body;
            data.updated_at    = new Date().toISOString().replace('T',' ').replace('Z','');
            const user = new UserModel(data,null,con,'user');
            await user.updateDynamic(data.id,'id');
            ctx.body = {message: 'update succesful'};
            ctx.status = 200;
            return;
        } catch (error) {
            console.log(error)
            ctx.throw(500,error);
        }
    }
}