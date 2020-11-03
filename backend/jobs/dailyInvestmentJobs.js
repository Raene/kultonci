let con = require('./connection')()
const { parentPort } = require('worker_threads');

function daily(con){
   return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM packageLevels WHERE (name = 'bronze' AND investmentPkg_id = 1)`,function(err, results){
        if(err) reject(err);
        resolve(results);
    })
   })
}

daily(con).then((results)=>{
    let percent = results[0].percentageReturns / 100;
    let sql = `UPDATE userInvestments SET paid_earnings = (initial_deposit * ${percent}) + paid_earnings,compounded_earnings = (compounded_deposits * ${percent}) + compounded_earnings WHERE (package_level = 'bronze' AND package_name ='daily investment packages' AND verified = 1)`
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
      });
    if (parentPort) parentPort.postMessage('done');
    else process.exit(0);
}).catch((error)=>{
    throw new Error(error);
})


