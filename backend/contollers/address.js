'use strict';

const AddressModel = require('../models/addressModel');

exports.create = function (con) {
    return async (ctx) => {
        try {
            const data = ctx.request.body;
            const address = new AddressModel(data,con,'address')
            const payload = await address.create();
            ctx.body = {data: payload.insertId, success: true}
            ctx.status = 200;
            return
        } catch (error) {
            console.log(error)
            ctx.throw(500, error);
        }
    }
}

exports.update = function (con) {
    return async (ctx) => {
        try {
            let data = ctx.request.body;
            data.updated_at    = new Date().toISOString().replace('T',' ').replace('Z','');

            const address = new AddressModel(data,con,'address')
            await address.update(data.id,'id');
            ctx.body = {message: 'update succesful'};
            ctx.status = 200;
             return
        } catch (error) {
            console.log(error)
            ctx.throw(500, error);
        }
    }
}