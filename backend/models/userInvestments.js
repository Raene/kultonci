'use strict';
const Db = require('./dbModel');

const InvestmentModel = function(obj,con,TableName) {
    Db.call(this,con,TableName);
    this.obj = Object.assign({},obj);
}

InvestmentModel.prototype = Object.create(Db.prototype);

Object.defineProperty(InvestmentModel.prototype, 'constructor',{
    value: InvestmentModel,
    enumerable:false,
    writable: true
});

InvestmentModel.prototype.create = async function () {
    try {
        let userInvestment = await this.insertToTable(this.obj)
        return userInvestment;
    } catch (error) {
        throw new Error(error);
    }
}

InvestmentModel.prototype.update = async function (whereValue,whereType) {
    try {
        let i = await this.updateDbDynamic(this.obj,whereValue,whereType);
        console.log(i);
        return i;
    } catch (error) {
        throw new Error(error)
    }
}

InvestmentModel.prototype.get = async function (value,valueType) {
    try {
        let sub = await this.getByFieldLatest(value, valueType);
        return sub;
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = InvestmentModel;