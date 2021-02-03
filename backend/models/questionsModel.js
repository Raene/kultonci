'use strict';

const Db = require('./dbModel');

const QuestionModel = function (obj, con, TableName) {
    Db.call(this, con, TableName);
    this.obj = Object.assign({}, obj);
}

QuestionModel.prototype = Object.create(Db.prototype);

Object.defineProperty(QuestionModel.prototype, 'constructor', {
    value: QuestionModel,
    enumerable: false,
    writable: true
});

QuestionModel.prototype.get = async function () {
    try {
        let questions = await this.getAllDb()
        return questions;
    } catch (error) {
        throw new Error(error);
    }
}

QuestionModel.prototype.getByValue = async function (value,valueType) {
    try {
        let question = await this.getByField(value, valueType);
        return question;
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = QuestionModel;