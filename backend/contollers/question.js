'use strict';
const QuestionModel = require('../models/questionsModel');

exports.getAll = function (con) {
    return async (ctx) => {
        try {
            const questions = new QuestionModel({},con,'security_questions');
            let payload = await questions.get();
            ctx.body = {success: true, data: payload};
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500, error.message);
        }
    }
}

exports.getById = function (con) {
    return async (ctx) => {
        try {
            const id = ctx.params.id;
            const questions = new QuestionModel({},con,'security_questions');
            let payload = await questions.getByValue(id,'id');
            ctx.body = {success: true, data: payload[0]};
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500, error.message);
        }
    }
}