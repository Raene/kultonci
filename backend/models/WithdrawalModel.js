'use strict';
const Db = require('./dbModel');

const WithdrawalModel = function (obj,con,TableName) {
    Db.call(this,con,TableName);
    this.obj = Object.assign({},obj);
}

WithdrawalModel.prototype = Object.create(Db.prototype);

Object.defineProperty(WithdrawalModel.prototype,'constructor',{
    value:WithdrawalModel,
    enumerable:false,
    writable:true
});

WithdrawalModel.prototype.create = async function () {
    try {
        let payload = await this.insertToTable(this.obj)
        return payload;
    } catch (error) {
        throw new Error(error);
    }
}

WithdrawalModel.prototype.update = async function (whereValue, wheretype) {
    try {
        let payload = await this.updateDbDynamic(this.obj,whereValue,wheretype);

        return payload;
    } catch (error) {
        throw new Error(error);
    }
}

WithdrawalModel.prototype.get = async function (value,valueType) {
    try {
        let sub = await this.getByFieldLatest(value, valueType);
        return sub;
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = WithdrawalModel;