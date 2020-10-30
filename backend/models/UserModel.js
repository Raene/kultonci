'use strict';

const Db = require('./dbModel');
const bcrypt = require('bcrypt');
const db = require('../jobs/connection');
const jwt = require("jsonwebtoken");

const UserModel = function (userSchema, kyc_id, con, TableName) {
    Db.call(this, con, TableName);
    ({ name: this.name, email: this.email, password: this.password } = userSchema);
    this.userSchema = Object.assign({}, { name: this.name, email: this.email, password: this.password });

    this.userSchema.kyc_id = kyc_id

}

//assign parent constructor to child constructor prototype
UserModel.prototype = Object.create(Db.prototype);

Object.defineProperty(UserModel.prototype, 'constructor', {
    value: UserModel,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

//wrapper function to utilize db insertToTable function
UserModel.prototype.create = async function () {
    try {
        //this.insertToTable, since UserMdel is now child of Db no need to use call on methods
        let u = await this.getByField(this.userSchema.email, 'email');
        if (u.length > 0) {
            throw new Error("User already exists");
        }
        this.userSchema.password = await hashPassword(this.userSchema.password)
        let user = await this.insertToTable(this.userSchema);
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

UserModel.prototype.update = async function (valueType,whereType,value,whereValue) {
    try {
        let u = await this.updateDb(valueType,whereType,value,whereValue);
        return u;
    } catch (error) {
        throw new Error(error)
    }
}

UserModel.get = async function (con, TableName, value, valueType) {
    try {
        let db = new Db(con, TableName);
        let user = await db.getByField(value, valueType);
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

UserModel.prototype.getByValue = async function (value,valueType) {
    try {
        let user = await this.getByField(value,valueType);
        return user;
    } catch (error) {
        throw new Error(error)
    }
}

UserModel.prototype.getUserByJoin = async function (value,valueType) {
    try {
        let user = await this.getUserJoin(value,valueType);
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

UserModel.prototype.delete = async function (value,valueType) {
    try {
        await this.dbDelete(value,valueType);
        return true;
    } catch (error) {
        throw new Error(error);
    }
}

UserModel.prototype.getAll = async function () {
    try {
        let user = await this.getUsersJoin();
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

UserModel.prototype.login = async function () {
    try {
        let u = await this.getByField(this.userSchema.email, 'email');
        if (u.length <= 0) {
            throw new Error("Email does not exist");
        }
        console.log(u);
        let {id,email,role,name} = u[0];
        let exists = await compareHashPassword(this.userSchema.password, u[0].password);
        if (exists != true) {
            throw new Error('Password is incorrect')
        }
        let token = jwt.sign(
            {
                id,
                email,
                role
            },
            process.env.SECRET_KEY,
            { expiresIn: "120h" }
        )
        return {id,name,email,token,role}
    } catch (error) {
        throw new Error(error);
    }
}

async function compareHashPassword(password, passwordHash) {
    const match = await bcrypt.compare(password, passwordHash);
    return match;
}

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash;
}
module.exports = UserModel;