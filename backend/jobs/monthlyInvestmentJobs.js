let con = require('./connection')()
const { parentPort } = require('worker_threads');

function monthly(con){
   return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM investmentPKG WHERE name = 'monthly'`,function(err, results){
        if(err) reject(err);
        resolve(results);
    })
   })
}

monthly(con).then((results)=>{
    let percent = results[0].percentage / 100;
    let sql = `UPDATE userInvestments SET amount_paid = (amount_paid * ${percent}) + amount_paid WHERE investmentPkg_id = ${results[0].id}`
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
      });
    if (parentPort) parentPort.postMessage('done');
    else process.exit(0);
}).catch((error)=>{
    throw new Error(error);
})


