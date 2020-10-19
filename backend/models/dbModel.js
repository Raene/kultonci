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
module.exports = Db;

 