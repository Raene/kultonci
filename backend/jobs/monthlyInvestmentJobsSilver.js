let con = require('./connection')()
const { parentPort } = require('worker_threads');

function monthly(con){
   return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM packageLevels WHERE (name = 'silver' AND investmentPkg_id=3)`,function(err, results){
        if(err) reject(err);
        resolve(results);
    })
   })
}

monthly(con).then((results)=>{
    let percent = results[0].percentageReturns / 100;
    let sql = `UPDATE userInvestments SET paid_earnings = (initial_deposit * ${percent}) + paid_earnings AND SET compounded_earnings = (compounded_deposits * ${percent}) + compounded_earnings WHERE (package_level ='silver'AND package_name='monthly compounding investment packages')`
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
      });
    if (parentPort) parentPort.postMessage('done');
    else process.exit(0);
}).catch((error)=>{
    throw new Error(error);
})



