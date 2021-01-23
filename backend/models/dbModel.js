'use strict';
let Db = function (con, TableName) {
    this.con = con;
    this.TableName = TableName;
};

Db.prototype.makeQuery = async function (queryfunction) {
    const connection = await new Promise((resolve, reject) => {
        this.con.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            }
            resolve(connection)
        })
    });
    try {
        return await queryfunction(connection)
    } catch (error) {
        throw new Error(error)
    } finally {
        console.log("connection released");
        connection.release()
    }
}


Db.prototype.insertToTable = async function (obj) {
    try {
        let sql = `INSERT INTO ${this.TableName} SET ?`;
        let result = await this.makeQuery(async connection => {
            return await new Promise((resolve, reject) => {
                connection.query(sql, obj, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                });
            })
        });
        console.log(result);
        return result;
    } catch (error) {
        throw new Error(error)
    }
};

Db.prototype.getByField = async function (value, valueType) {
    try {
        let sql = `SELECT * FROM ${this.TableName} WHERE ${valueType} = ?`;
        let result = await this.makeQuery(async connection => {
            return await new Promise((resolve, reject) => {
                connection.query(sql, value, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                });
            });
        })
        return result;
    } catch (error) {
        throw new Error(error)
    }
};

Db.prototype.getByFieldUser = async function (value, valueType) {
    try {
        let sql = `SELECT id,name,email,kyc_id,created_at,updated_at,deleted_at,role,verified,referral,referee_id FROM ${this.TableName} WHERE ${valueType} = ?`;
        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                connection.query(sql, value, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                });
            });
        })
        return result;
    } catch (error) {
        throw new Error(error)
    }
};

Db.prototype.getByFieldLatest = async function (value, valueType) {
    try {
        let sql = `SELECT * FROM ${this.TableName} WHERE ${valueType} = ?  ORDER BY id DESC LIMIT 1`;
        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                connection.query(sql, value, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                });
            });
        })
        return result;
    } catch (error) {
        throw new Error(error)
    }
};

Db.prototype.getAllDb = async function () {
    try {
        let sql = `SELECT * FROM ${this.TableName}`;
        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                connection.query(sql, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                });
            });
        })
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

Db.prototype.dbDelete = async function (value, valueType) {
    try {
        let sql = `DELETE FROM ${this.TableName} WHERE ${valueType} = ?`;
        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                connection.query(sql, value, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                });
            })
        })
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

Db.prototype.getLatest = async function () {
    try {
        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                connection.query(`SELECT * FROM ${this.TableName} ORDER BY id DESC LIMIT 1`, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                });
            })
        })
        return result;
    } catch (error) {
        throw new Error(error)
    }
}

Db.prototype.getJoin = async function () {
    try {
        let sql = `SELECT *,packageLevels.name as PackageName,packageLevels.id as PackageId FROM packageLevels INNER JOIN investmentPKG ON packageLevels.investmentPkg_id = investmentPKG.id`;
        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                connection.query(sql, function (err, result) {
                    if (err) reject(err);
                    resolve(result);
                })
            })
        })
        return result
    } catch (error) {
        throw new Error(error)
    };
}

Db.prototype.getJoinWhere = async function (value, valueType) {
    try {
        let sql = `SELECT *,packageLevels.name as PackageName,packageLevels.id as PackageId FROM packageLevels INNER JOIN investmentPKG ON packageLevels.investmentPkg_id = investmentPKG.id WHERE ${valueType} = ?`;
        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                connection.query(sql, value, function (err, result) {
                    if (err) reject(err);
                    resolve(result);
                })
            });
        });
        return result
    } catch (error) {
        throw new Error(error)
    }
}

Db.prototype.getUsersJoin =async function () {
    try {
        let sql = `SELECT user.name as name,user.id as userId,user.email as userEmail,user.kyc_id as kycId, user.role as userRole, user.verified as userVerified, user.referee_id as referee_id,user.referral as  referral_code,user.created_at as userCreatedAt, kyc.kycId as kycPath FROM user INNER JOIN kyc ON user.kyc_id = kyc.id`;
        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                connection.query(sql, function (err, result) {
                    if (err) reject(err);
                    resolve(result);
                })
            });
        })
        return result
    } catch (error) {
        throw new Error(error)
    }
}

Db.prototype.getUserJoin = async function (value, valueType) {
    try {
        let sql = `SELECT user.name as name,user.id as userId,user.email as userEmail,user.kyc_id as kycId, user.role as userRole, user.verified as userVerified,user.referee_id as referee_id, user.referral as  referral_code,user.created_at as userCreatedAt, kyc.kycId as kycPath FROM user INNER JOIN kyc ON user.kyc_id = kyc.id WHERE ${valueType} = ?`;
        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                connection.query(sql, value, function (err, result) {
                    if (err) reject(err);
                    resolve(result);
                })
            });
        })
        return result;
    } catch (error) {
        throw new Error(error)
    }
}

Db.prototype.updateDb = async function (valueType, whereType, value, whereValue) {
    try {
        let sql = `UPDATE ${this.TableName} SET ${valueType} = ? WHERE ${whereType} = ?`;
        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                let arr = [value, whereValue]
                connection.query(sql, arr, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                })
            })
        })
        return result;
    } catch (error) {
        throw new Error(error)
    }
}

Db.prototype.updateDbDynamic = async function (obj, whereValue, whereType) {
    try {
        let sql = `UPDATE ${this.TableName} SET ${Object.keys(obj).map(key => `${key} = ?`).join(", ")}  WHERE ${whereType} = ?`;
        console.log(obj);
        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                let arr = [...Object.values(obj), whereValue]
                connection.query(sql, arr, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                })
            })
        })
        return result;
    } catch (error) {
        throw new Error(error)
    }
}

Db.prototype.getPaymentsJoin = async function () {
    try {
        let sql = `SELECT payment.id as paymentId,
        payment.paymentImg,
        payment.user_id as userId,
        payment.tmpDeposit_id as tmpDepositId, 
        tmpDeposit.deposit as Deposit, 
        tmpDeposit.pkgName as PackageName, 
        tmpDeposit.pkgLevel as PackageLevel, 
        user.name as name, 
        user.id as userId FROM payment INNER JOIN user 
        ON payment.user_id = user.id 
        INNER JOIN tmpDeposit 
        ON payment.tmpDeposit_id = tmpDeposit.id`;

        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                connection.query(sql, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                });
            })
        })
        return result;
    } catch (error) {
        throw new Error(error)
    }
};


Db.prototype.getPaymentJoin = async function (value, valueType) {
    try {
        let sql = `SELECT payment.id as paymentId,
                   payment.paymentImg,
                   payment.user_id as userId,
                   payment.tmpDeposit_Id as tmpDepositId, 
                   tmpDeposit.deposit as Deposit, 
                   tmpDeposit.pkgName as PackageName, 
                   tmpDeposit.pkgLevel as PackageLevel,
                   user.name as name, 
                   user.id as userId 
                   FROM payment 
                   INNER JOIN user 
                   ON payment.user_id = user.id 
                   INNER JOIN tmpDeposit 
                   ON payment.tmpDeposit_id = tmpDeposit.id
                   WHERE ${valueType} = ?`;

        let result = await this.makeQuery(async connection => {
            return new Promise((resolve, reject) => {
                connection.query(sql, value, function (err, result) {
                    if (err) reject(err);
                    resolve(result);
                })
            })
        })
        return result
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = Db;

