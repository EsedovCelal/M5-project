const express = require("express");
const mysql = require("mysql");
const app = express();

// const connection = mysql.createConnection({
//     host: "",
//     port: ,
//     user:"",
//     password:"",
//     database:"",
//     multipleStatements:true
// });

// connection.connect((err) => {
//   if (!err) {
//     console.log("connected database with successfully");
//   }
// });

// app.get(){};
// app.post(){};
// app.put(){};
// app.delete(){};

app.listen(3000, function () {
  console.log("connected successfully");
});
