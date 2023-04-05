const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "password",
  port: "3306",
  database: "project_v",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
