'use strict';
const Db = require('./dbModel');

const TmpDepositModel = function(obj,con,Tablename) {
    Db.call(this,con,Tablename);
    this.obj = Object.assign({},obj);
}

TmpDepositModel.prototype = Object.create(Db.prototype);

Object.defineProperty(TmpDepositModel.prototype,'constructor',{
    value: TmpDepositModel,
    enumerable:false,
    writable:true
});




TmpDepositModel.prototype.createTmpDeposit = async function () {
    try {
        let tmpDeposit = await this.insertToTable(this.obj);
        return tmpDeposit;
    } catch (error) {
        throw new Error(error);
    }   
   }