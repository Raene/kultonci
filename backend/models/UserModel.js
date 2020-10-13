'use strict';

const Db  = require('./dbModel');

const UserModel = function (userSchema,kyc_id,con,TableName) {
    Db.call(this,con,TableName);
    ({name: this.name, email: this.email, password: this.password} = userSchema);
    this.userSchema = Object.assign({},{name: this.name, email: this.email, password: this.password});

    this.userSchema.kyc_id = kyc_id
    
} 

//assign parent constructor to child constructor prototype
UserModel.prototype = Object.create(Db.prototype);

Object.defineProperty(UserModel.prototype, 'constructor', { 
    value: UserModel, 
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });

//wrapper function to utilize db insertToTable function
UserModel.prototype.create = async function () {
    try {
        //this.insertToTable, since UserMdel is now child of Db no need to use call on methods
        let user = await this.insertToTable(this.userSchema);
        return user;   
    } catch (error) {
        throw new Error(error);
    }
}

UserModel.get = async function (con,TableName,value,valueType) {
    try {
        let db = new Db(con,TableName);
        let user = await db.getByID(value,valueType);
        return user;   
    } catch (error) {
        throw new Error(error);
    }
}

UserModel.login = async function (con,TableName,{email,password}) {
    try {
        let user = await UserModel.get(con,TableName,email);
        if (user.password != password) throw new Error('Incorrect Password');
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = UserModel;