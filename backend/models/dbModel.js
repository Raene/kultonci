'use strict';

let Db = function (con,TableName) {
        this.con = con;
        this.TableName = TableName;
};

Db.prototype.insertToTable = function (obj) {
    return new Promise( (resolve, reject) => {
        let sql = `INSERT INTO ${this.TableName} SET ?`;
        this.con.query(sql,obj, function (err,results) {
            if(err) reject(err);
            resolve(results);  
        });
    });
};

Db.prototype.getByField = function (value,valueType){
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM ${this.TableName} WHERE ${valueType} = ?`;
        this.con.query(sql,value, function (err,results) {
            if(err) reject(err);
            resolve(results);
        });
    });
};

Db.prototype.getAllDb = function () {
    return new Promise((resolve,reject) => {
        let sql = `SELECT * FROM ${this.TableName}`;
        this.con.query(sql, function (err,results) {
            if(err) reject(err);
            resolve(results);
        });
    });
}

Db.prototype.getLatest = function () {
    return new Promise((resolve,reject)=> {
        this.con.query(`SELECT * FROM ${this.TableName} ORDER BY id DESC LIMIT 1`,function (err,results) {
            if (err) reject(err);
            resolve(results);
        });
    })
}

Db.prototype.getJoin = function () {
    return new Promise((resolve,reject)=>{
        let sql= `SELECT *,packageLevels.name as PackageName,packageLevels.id as PackageId FROM packageLevels INNER JOIN investmentPKG ON packageLevels.investmentPkg_id = investmentPKG.id`;
        this.con.query(sql,function (err,result) {
        if(err) reject(err);
        resolve(result);
        }) 
    });
}

Db.prototype.getUsersJoin = function () {
    return new Promise((resolve,reject)=>{
        let sql= `SELECT user.name as name,user.id as userId,user.email as userEmail,user.kyc_id as kycId, user.role as userRole, user.verified as userVerified, user.created_at as userCreatedAt, kyc.kycId as kycPath FROM user INNER JOIN kyc ON user.kyc_id = kyc.id`;
        this.con.query(sql,function (err,result) {
        if(err) reject(err);
        resolve(result);
        }) 
    });
}

Db.prototype.getUserJoin = function (value,valueType) {
    return new Promise((resolve,reject)=>{
        let sql= `SELECT user.name as name,user.id as userId,user.email as userEmail,user.kyc_id as kycId, user.role as userRole, user.verified as userVerified, user.created_at as userCreatedAt, kyc.kycId as kycPath FROM user INNER JOIN kyc ON user.kyc_id = kyc.id WHERE ${valueType} = ?`;
        this.con.query(sql,value,function (err,result) {
        if(err) reject(err);
        resolve(result);
        }) 
    });
}

Db.prototype.updateDb = function (valueType,whereType,value,whereValue) {
    return new Promise((resolve,reject)=>{
        let sql = `UPDATE ${this.TableName} SET ${valueType} = ? WHERE ${whereType} = ?`;

        let arr = [value,whereValue]
        this.con.query(sql,arr, function (err,results) {
            if(err) reject(err);
            resolve(results);
        })
    })
}
module.exports = Db;

 