'use strict';

const mime = require('mime-types')
let UserModel = require('../models/UserModel');
let KYCModel = require('../models/kycModel');
var fs = require('fs');

exports.register = function (con) {
    return async (ctx) => {
        try {
            console.log("controller")
            console.log(ctx.request.body)
            const data = ctx.request.body;
            const kyc = {};
            kyc.kycId    = await upload(ctx.request.files.kyc);
    
            const kycUser = new KYCModel(kyc,con,'kyc');
            const kycID   = await kycUser.create();
        
            const user = new UserModel(data,kycID.insertId, con, 'user');
            await user.create();
            ctx.body = { message: 'User Created' };
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500, error.message);
        }
    }
};

exports.login = function (con) {
    return async (ctx) => {
        try {
            const data = ctx.request.body;
            const user = new UserModel(data,null,con,'user')
            let payload = await user.login()
            ctx.body = { message: payload };
            ctx.status = 200;
        } catch (error) {
            console.log(error);
            ctx.throw(500, error);
        }
    }
}

exports.passwordResetToken = function (con) {
    return async (ctx) => {
        try {
            const data = ctx.request.body;
            const user = new UserModel({},null,con,'user');
            let userExists = await user.getByValue(data.email,'email');
            if(userExists.length <= 0){
                throw new Error("Email not Found");
            }

        } catch (error) {
            console.log(error);
            ctx.throw(500,error)
        }
    }
}

exports.passwordReset = function (con) {
    return async (ctx) => {
        try {
            
        } catch (error) {
            console.log(error);
            ctx.throw(500,error)
        }
    }
}

exports.get = function (con) {
    return async (ctx) => {
        try {
            const id = ctx.params.id;
            let user = await UserModel.get(con, 'user', id, 'id');
            ctx.body = { message: user };
        } catch (error) {
            console.log(error);
            ctx.throw(500, error);
        }
    }
};

async function upload(fileObj) {
    const { path, name, type } = fileObj;
    const fileDest = process.cwd() + '/images/' + name;
    await fs.renameSync(path, fileDest);
    // console.log(`path: ${fileDest}`);
    // const fileExtension = mime.extension(type);
    // console.log(`filename: ${name}`);
    // console.log(`type: ${type}`);
    // console.log(`fileExtension: ${fileExtension}`)

    return name;
}