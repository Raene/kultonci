var mysql = require('mysql');

const db = function(){
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'kulton-ci'
    });
    
    con.connect(function(err) {
    if (err) console.log(err);
    console.log("Connected!");
    });
  
    return con;
  }
  module.exports = db;