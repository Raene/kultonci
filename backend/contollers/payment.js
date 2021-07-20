'use strict';
let UserInvestmentModel = require('../models/userInvestments');
const fs = require('fs');

//user controller to upload proof of payment
exports.proofOfPayment = function (con) {
    return async (ctx)=> {
        try {
            const data = ctx.request.body;
            let paymentObj = {};
            paymentObj.paymentProof = data.paymentImg;

            const payment = new UserInvestmentModel(paymentObj,con,'userInvestments');

            await payment.update(data.id,'id');
            ctx.body = {message: 'Payment Proof Upload succesful'};
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500,error);
        }
    }
}

//this should be a join that fetches with username
exports.fetchProofsOfPayment = function (con) {
    return async (ctx) => {
        try {
            const payment = new PaymentModel({},con,'payment');

            let payments = await payment.getAll();
            ctx.body = {success: true, data: payments};
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500,error);
        }
    }
}

exports.fetchProofsOfPaymentById = function (con) {
    return async (ctx) => {
        try {
            const id = ctx.params.id;
            const payment = new PaymentModel({},con,'payment');

            let paymentData = await payment.getPaymentByJoin(id,'payment.id')
            
            ctx.body = {success: true, data:paymentData};
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500,error);
        }
    }
}

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