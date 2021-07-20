'use strict';

const mime = require('mime-types')
let UserModel = require('../models/UserModel');
let KYCModel = require('../models/kycModel');
const { fork } = require('child_process');
var fs = require('fs');

exports.register = function (con) {
    return async (ctx) => {
        try {
            const data = ctx.request.body;
            const kyc = {};
            kyc.kycId = data.kyc;

            const kycUser = new KYCModel(kyc, con, 'kyc');
            const kycID = await kycUser.create();

            let formattedData = {
                user: {
                    email: data.email,
                    referral_code: data.referral_code,
                    name: data.name,
                    password: data.password,
                    repeat_password: data.repeat_password,
                    dob: data.dob,
                    phone: data.phone,
                    ssn:data.ssn
                },
                address: {
                    address: data.address,
                    city: data.city,
                    state: data.state,
                    country: data.country,
                    zip: data.zip
                },
                questions_user: {
                    answer: data.answer,
                    security_questions_id: data.security_questions_id
                }
            }

            const user = new UserModel(formattedData, kycID.insertId, con, 'user');
            await user.create();
            let mail = {
                email: data.email,
                subject:  "Welcome",
                text: `Hello ${data.name}`
            }

            mailProcess(mail,'START')
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
            const user = new UserModel(data, null, con, 'user')
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
            const user = new UserModel({}, null, con, 'user');
            let userExists = await user.getByValue(data.email, 'email');
            if (userExists.length <= 0) {
                throw new Error("Email not Found");
            }

        } catch (error) {
            console.log(error);
            ctx.throw(500, error)
        }
    }
}

exports.passwordReset = function (con) {
    return async (ctx) => {
        try {

        } catch (error) {
            console.log(error);
            ctx.throw(500, error)
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
    console.log(path)
    console.log(`path: ${fileDest}`);
    // const fileExtension = mime.extension(type);
    console.log(`filename: ${name}`);
    // console.log(`type: ${type}`);
    // console.log(`fileExtension: ${fileExtension}`)

    return name;
}

function mailProcess (obj,command) {
    var args = [JSON.stringify(obj)];
    const child = fork('./childProcesses/mailjob', args);
    child.send(command);
    child.on('message', (message) => {
        if (message.error) {
            console.error(message.error);
        } else {
            console.log('mail sent', message);
        }
    });

    child.on("exit", (code) => {
        console.log(`child_process exited with code ${code}`);
    });
    return
}