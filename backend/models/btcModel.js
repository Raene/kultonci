'use strict';
const Db = require('./dbModel');

const BTCModel = function (btcSchema, con, TableName) {
    Db.call(this, con, TableName);
    this.btcSchema = btcSchema;
}

BTCModel.prototype = Object.create(Db.prototype);

Object.defineProperty(BTCModel.prototype, 'constructor', {
    value: BTCModel,
    enumerable: false,
    writable: true
});

BTCModel.prototype.create = async function () {
    try {
        let btc = await this.insertToTable(this.btcSchema);
        return btc;
    } catch (error) {
        throw new Error(error);
    }
}

BTCModel.prototype.GetLatest = async function() {
    try {
        let btc = await this.getLatest();
        return btc;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = BTCModel;