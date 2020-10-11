const mysql = require('mysql');

//  module.exports.db = function(){
//    return new Promise (function(resolve, reject){
//     const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: ""
//     });

//     con.connect(function(err) {
//       if (err) return reject(err);
//       resolve("Connected!");
//     });
//   }
// );
// }();

const db = function(host,user,password,database){
  const con = mysql.createConnection({
              host: host,
              user: user,
              password: password,
              database: database
  });

  con.connect(function(err) {
    if (err) console.log(err);
     console.log("Connected!");
  });

  return con;
}
module.exports = db;