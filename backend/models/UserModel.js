'use strict';

const Db = require('./dbModel');
const bcrypt = require('bcrypt');
const voucher_codes = require('voucher-code-generator');
const jwt = require("jsonwebtoken");
const { user } = require('../config/env');

const UserModel = function (userSchema, kyc_id, con, TableName) {
    Db.call(this, con, TableName);
    
    this.userSchema = Object.assign({}, userSchema);
    this.kyc_id = kyc_id;

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
        let u = await this.getByField(this.userSchema.user.email, 'email');
        if (u.length > 0) {
            throw new Error("User already exists");
        }
        this.userSchema.user.kyc_id = this.kyc_id
        let referral_code = this.userSchema.user.referral_code;
        console.log(this.userSchema)
        //check if user is signing up with a referral code
        //get the first char from the string, that is the referee id
        if (referral_code != "") {
            this.userSchema.user.referee_id = this.referral_code.split("-")[0];
        }
        delete this.userSchema.user.referral_code;
        delete this.userSchema.user.repeat_password;
        this.userSchema.user.password = await hashPassword(this.userSchema.user.password)
        let user = await this.insertTransaction(this.userSchema);
        this.userSchema.user.referral = voucher_codes.generate({
            prefix: `${user.insertId}-`,
            length: 6
        });
        await this.updateDbDynamic({ referral: this.userSchema.user.referral }, user.insertId, 'id');
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

UserModel.prototype.update = async function (valueType, whereType, value, whereValue) {
    try {
        let u = await this.updateDb(valueType, whereType, value, whereValue);
        return u;
    } catch (error) {
        throw new Error(error)
    }
}

UserModel.prototype.updateDynamic = async function (whereValue,whereType) {
    try {
        let u = await this.updateDbDynamic(this.userSchema,whereValue,whereType);
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

UserModel.prototype.getByValue = async function (value, valueType) {
    try {
        let user = await this.getByFieldUser(value, valueType);
        return user;
    } catch (error) {
        throw new Error(error)
    }
}

UserModel.prototype.getUserByJoin = async function (value, valueType) {
    try {
        console.log(value)
        let user = await this.getUserJoin(value, valueType);
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

UserModel.prototype.delete = async function (value, valueType) {
    try {
        await this.dbDelete(value, valueType);
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
    console.log("SECRET_KEY: " + process.env.SECRET_KEY)
    try {
        let u = await this.getByField(this.userSchema.email, 'email');
        if (u.length <= 0) {
            throw new Error("Email does not exist");
        }
        console.log(u);
        let { id, email, role, name, referral, referee_id,phone,dob,ssn } = u[0];
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
        return { id, name, email, token, role, referral, referee_id,phone,dob,ssn }
    } catch (error) {
        throw new Error(error);
    }
}

UserModel.prototype.updatePassword = async function (whereValue,whereType) {
    try {
        let u = await this.getByField(this.userSchema.email, 'email');
        if (u.length <= 0) {
            throw new Error("Email does not exist");
        }
        console.log(u);
        let exists = await compareHashPassword(this.userSchema.oldPassword, u[0].password);
        if (exists != true) {
            throw new Error('Password is incorrect')
        }
        this.userSchema.password = await hashPassword(this.userSchema.password)
        delete this.userSchema.oldPassword;
        let np = await this.updateDbDynamic(this.userSchema,whereValue,whereType);
        return np;
    } catch (error) {
        console.log(error);
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
