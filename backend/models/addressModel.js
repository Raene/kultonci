'use strict';
const Db = require('./dbModel');

const AddressModel = function (addressSchema,con,TableName) {
    Db.call(this,con,TableName);

    this.addressSchema = Object.assign({}, {address: addressSchema.address,zip:addressSchema.zip,lga:addressSchema.lga,city:addressSchema.city,state:addressSchema.state,country:addressSchema.country,user_id:addressSchema.user_id})
}

AddressModel.prototype = Object.create(Db.prototype);

Object.defineProperty(AddressModel.prototype, 'constructor', {
    value: AddressModel,
    enumerable:false,
    writable:true
});

AddressModel.prototype.create = async function () {
    try {
        let address = await this.insertToTable(this.addressSchema);
        return address;
    } catch (error) {
        throw new Error(error);
    }
}

AddressModel.prototype.update = async function (whereValue,whereType) {
    try {
        let address = await this.updateDbDynamic(this.addressSchema,whereValue,whereType);
        return address;
    } catch (error) {
        throw new Error(error);
    }
}

AddressModel.prototype.getAddrByField = async function (whereValue,whereType) {
    try {
        let address = await this.getByField(whereValue,whereType);
        return address;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = AddressModel;