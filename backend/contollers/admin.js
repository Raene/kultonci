'use strict';
let UserInvestmentModel = require('../models/userInvestments');
let BTCModel  = require('../models/btcModel');
const UserModel = require('../models/UserModel');
const { fork } = require('child_process');

exports.verifySub = function (con) {
    return async (ctx) => {
        try {
            //when verifying sub send referee_id and referral_bonus of selected package
            const data = ctx.request.body;
            const userInvestment = new UserInvestmentModel(data,con,'userInvestments')
            let investment = await userInvestment.get(data.id,'id')
        
            // let new_deposit = investment[0].total_deposit + data.newDeposit
            let invest = await userInvestment.update(investment[0].id,'id')

            const referee_id = parseInt(ctx.params.referee_id);
            const referral_bonus   = parseInt(ctx.params.referral_bonus);
            if(referee_id != null && referee_id > 0){
                let investment = await userInvestment.get(referee_id,'user_id');
                let percent = referral_bonus / 100;
                investment[0].referral_earnings = (data.initial_deposit * percent) + investment[0].referral_earnings; 
                await userInvestment.updateByField('referral_earnings','id',investment[0].referral_earnings,investment[0].id,);
            }
            if (investment.verified == 0){
                const user = new UserModel({},null,con,'user');
                let payload = await user.getUserByJoin(investment.user_id,'user.id');
                let mail = {
                    email: payload[0].email,
                    subject:  "Deposit Verification",
                    text: `Hello, ${payload[0].name} your deposit has been verified`
                }
                mailProcess(mail,'START')
            }
            ctx.body = {data: invest, success: true}
            ctx.status = 200;
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

            ctx.body = {message: 'Address Created', address:data.address}
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
            let payload = await user.getUserByJoin(id,'user.id');
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
            let fetchedUser = await user.getUserByJoin(data.id,'user.id');
            console.log(fetchedUser)
            let mail = {
                email: fetchedUser[0].userEmail,
                subject:  "Deposit Verification",
                text: `Hello, ${fetchedUser[0].name} your account at kultonci has been verified`
            }
            mailProcess(mail,'START')
            ctx.body = {success: true, data: payload};
            ctx.status = 200;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

exports.userToAdmin = function (con) {
    return async (ctx) => {
        try {
            const data = ctx.request.body;
            const user = new UserModel({}, null, con, 'user');
            let payload = await user.update('role','id',2,data.id);
            ctx.body = {success: true, data: payload};
            ctx.status = 200;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

exports.deleteuser = function (con) {
    return async (ctx) => {
        try {
            const id = ctx.params.id;
            const user = new UserModel({}, null, con, 'user');
            let status = await user.delete(id,'id');
            ctx.body = {success: status};
            ctx.status = 200;
        } catch (error) {
            throw new Error(error.message);
        }
    }
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