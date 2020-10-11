'use strict';

let UserModel = require('../models/UserModel');

exports.register = function(con){
   return async(ctx) => {
    try {
        const data = ctx.request.body;
        const user = new UserModel(data,con,'user');
        await user.create();
        ctx.body = {message:'User Created'};
        ctx.status = 200;
    } catch (error) {
        console.log(error);
        ctx.throw(500, error);
    }
}};

exports.login = function (con) {
    return async(ctx) =>{
        try {
            console.log(ctx.request.body);
            ctx.status = 200;
        } catch (error) {
            console.log(error);
            ctx.throw(500, error);
        }
    }
}

exports.get = function(con){
    return async(ctx) => {
     try {
        const id = ctx.params.id;
        let user = await UserModel.get(con,'user',id,'id');
        ctx.body = {message: user};
     } catch (error) {
         console.log(error);
         ctx.throw(500, error);
     }
 }};