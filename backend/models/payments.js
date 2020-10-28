'use strict';

const Db = require('./dbModel');

const PaymentModel = function (paymentSchema,con,TableName ) {
    Db.call(this, con, TableName);
    this.paymentSchema = Object.assign({},paymentSchema);

}

PaymentModel.prototype = Object.create(Db.prototype);

Object.defineProperty(PaymentModel.prototype, 'constructor', {
    value: PaymentModel,
    enumerable: false,
    writable: true
});

PaymentModel.prototype.create = async function () {
    try {
        let payment = await this.insertToTable(this.paymentSchema);
        return payment;
    } catch (error) {
        throw new Error(error);
    }
}

PaymentModel.prototype.getAll = async function () {
    try {
        let payment = await this.getPaymentsJoin();
        return payment;
    } catch (error) {
        throw new Error(error);
    }
}

PaymentModel.prototype.getPaymentByJoin = async function () {
    try {
        let payment = await this.getPaymentJoin(value,valueType);

        return payment;
    } catch (error) {
        throw new Error(error);
    }
}