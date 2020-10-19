'use strict';

const Db = require('./dbModel');

const SubModel = function (obj,con,TableName) {
    Db.call(this,con,TableName);
    this.obj = Object.assign({},obj);
}

SubModel.prototype = Object.create(Db.prototype);

Object.defineProperty(SubModel.prototype, 'constructor', {
    value: SubModel,
    enumerable: false,
    writable:true
});

SubModel.prototype.get = async function () {
    try {
        let sub = await this.getJoin();
        return sub;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = SubModel;