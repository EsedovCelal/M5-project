const express = require("express");
const mysql = require("mysql");
const app = express();

app.use("/images", express.static("icons"));
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Celal2646559",
  database: "m5project",
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) {
    console.log("connected database with successfully", (err, data) => {
      if (!err) {
        console.log(data);
      }
    });
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/get", function (req, res) {
  connection.query("SELECT * FROM coin_informations", (err, data) => {
    if (!err) {
      res.json(data);
    }
  });
});
app.post("/post", function (req, res) {
  const newinfo = req.body;
  connection.query(
    "INSERT INTO coin_informations SET ?",
    [newinfo],
    (err, data) => {
      if (err) return res.status(500).json(err);
      return res.send("Added new info");
    }
  );
});
// app.put(){};
// app.delete(){};

app.listen(3000, function () {
  console.log("connected successfully with port 3000");
});
