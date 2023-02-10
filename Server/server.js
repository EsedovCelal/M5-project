const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

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
app.use(cors());

app.get("/seach/:keyword", function (req, res) {
  //ümumi category lərə görə coinləri verir
  const seachword = req.query.q; // ?q=keyword q də yazılan keyworda bərabər olur
  const { keyword } = req.params; // bu hissədədə 3 category dən biri gəlir
  connection.query(
    `SELECT * FROM coin_informations WHERE category = "${keyword} coins" AND (coinname LIKE '%${seachword}%' OR shortDesc LIKE "%${seachword}%" OR longDesc LIKE "%${seachword}%") AND (isRemoved = 0);`,
    (err, data) => {
      if (err) {
        return res.status(500).send("There is have a problem");
      }
      res.json(data);
    }
  );
});
app.get("/adminpanel1", function (req, res) {
  //burda bütün coinləri seach ə görə verir
  const seachword = req.query.q; // ?q=keyword q də yazılan keyworda bərabər olur
  connection.query(
    `SELECT * FROM coin_informations WHERE (coinname LIKE '%${seachword}%' OR shortDesc LIKE "%${seachword}%" OR longDesc LIKE "%${seachword}%") AND (isRemoved = 0);`,
    (err, data) => {
      if (err) {
        return res.status(500).send("There is have a problem");
      }
      res.json(data);
    }
  );
});

app.get("/adminpanel1/allcoins", function (req, res) {
  connection.query(
    "SELECT * FROM coin_informations WHERE isRemoved = 0;",
    (err, data) => {
      if (err) {
        return res.status(500).send("There is have a problem");
      }
      res.json(data);
    }
  );
});
app.get("/adminpanel2/editcoin/:id", function (req, res) {
  const { id } = req.params;
  // adminpanel1 də edilən edit və delete üçün fetch
  connection.query(
    `SELECT * FROM coin_informations WHERE id = "${id}" AND isRemoved = 0;`,
    (err, data) => {
      if (err) {
        return res.status(500).send("There is hava a proble");
      }
      res.json(data);
    }
  );
});
app.get("/:keyword", function (req, res) {
  //bu hissədə categorylər alınır
  const { keyword } = req.params;
  connection.query(
    `SELECT * FROM coin_informations WHERE category = "${keyword} coins" AND isremoved = 0;`,
    (err, data) => {
      if (err) {
        return res.status(500).send("There is hava a proble");
      }
      res.json(data);
    }
  );
});

app.get("/description/:id", function (req, res) {
  // id yə görə hər bir coin məlumatı alınması üçün atılan fetch
  const { id } = req.params;
  connection.query(
    `SELECT * FROM coin_informations WHERE id = "${id}" AND isremoved = 0;`,
    (err, data) => {
      if (err) {
        return res.status(500).send("There is have a error");
      }
      res.json(data);
    }
  );
});
app.get("/", function (req, res) {
  //Home page də atılan category üçün fetch
  connection.query(
    "SELECT * FROM coin_informations_category_name WHERE isremoved = 0;",
    (err, data) => {
      if (err) {
        return res.status(500).send("there is have a problem");
      }
      res.json(data);
    }
  );
});

app.post("/post", function (req, res) {
  const newinfo = req.body;
  connection.query(
    "INSERT INTO coin_informations SET ?;",
    [newinfo],
    (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Added new coin's info");
    }
  );
});
app.put("/adminpanel2/editcoin/:id", function (req, res) {
  const { id } = req.params;
  const newData = req.body;
  if (!Object.keys(newData).length) {
    return res.send("There have a problem");
  }
  connection.query(
    "UPDATE coin_informations SET ? WHERE id = ?",
    [newData, id],
    (err, data) => {
      if (!err) {
        connection.query(
          "SELECT * FROM coin_informations WHERE id = ?",
          [id],
          (err, data) => {
            if (!err) res.json(data);
          }
        );
      }
    }
  );
});
app.delete("/adminpanel1/delete/:id", function (req, res) {
  const { id } = req.params;
  connection.query(
    `UPDATE coin_informations SET isremoved = '1' WHERE id = ${id};`,
    (err, data) => {
      if (!err) {
        return res.json("Deleted selected coin");
      }
      res.status(500).json(err);
    }
  );
});

app.listen(3000, function () {
  console.log("connected successfully with port 3000");
});
