'use strict';

const Db  = require('./dbModel');

const KYCModel = function (fileObj,con,TableName) {
    Db.call(this,con,TableName);
    this.fileObj = Object.assign({},fileObj);   
}


KYCModel.prototype = Object.create(Db.prototype);

Object.defineProperty(KYCModel.prototype, 'constructor', {
    value: KYCModel,
    enumerable: false,
    writable: true
});


KYCModel.prototype.create = async function () {
    try {
        let kyc = await this.insertToTable(this.fileObj);
        return kyc;
    } catch (error){
        throw new Error(error)
    }

}

module.exports = KYCModel;