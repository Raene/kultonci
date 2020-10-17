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
        })
    });
};

Db.prototype.getByField = function (value,valueType){
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM ${this.TableName} WHERE ${valueType} = ?`;
        this.con.query(sql,value, function (err,results) {
            if(err) reject(err);
            resolve(results);
        })
    });
};
module.exports = Db;

 