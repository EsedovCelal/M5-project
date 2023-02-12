const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
require("dotenv").config(); //database məlumatlarımızın github a getməməsi üçün
const bcrypt = require("bcrypt"); //user parollarını hash etmək üçünü olan npm
const jwt = require("jsonwebtoken");

app.use("/images", express.static("icons"));
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_TABLE_NAME,
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
  const { country } = req.query;
  const { metal } = req.query;
  const { quality } = req.query;
  const { priceto } = req.query;
  const { pricefrom } = req.query;
  const { yearto } = req.query;
  const { yearfrom } = req.query;

  console.log({
    categroty: keyword,
    seachword,
    country,
    metal,
    quality,
    priceto,
    pricefrom,
    yearto,
    yearfrom,
  });
  const test = `${
    pricefrom && priceto && `OR price BETWEEN ${pricefrom} AND ${priceto}`
  }`;
  const query = `SELECT * FROM coin_informations WHERE category = "${keyword} coins"  AND (isRemoved = 0) AND (coinname LIKE '%${seachword}%' OR shortDesc LIKE "%${seachword}%" OR longDesc LIKE "%${seachword}%")${
    country && ` AND country LIKE "%${country}%" `
  }${metal && ` AND metal LIKE "%${metal}%"`}${
    quality && ` AND quality LIKE "%${quality}%" `
  }${pricefrom && priceto && `AND price BETWEEN ${pricefrom} AND ${priceto}`}${
    yearfrom && yearto && ` AND year BETWEEN ${yearfrom} AND ${yearto}`
  };`;
  console.log(query);
  console.log("test", test);
  connection.query(query, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(data);
  });
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

app.post("/register", (req, res) => {
  const { username, password } = req.body; // istifadəçinin qeydiyyat üçün daxil etdiyi user və parol
  const salt = bcrypt.genSaltSync(15); //random yaradılan parolun içərisinə əlavə random simvollar bunlardır.15 əlavə yaradılan simvol yasıdır dəyişdirilə bilər.
  const hash = bcrypt.hashSync(password, salt); // və burda parol random yaradılır və içərisinə salt əlavə olunur.database e gedən kod hash-dir
  const user = {
    username,
    password: hash,
  };
  connection.query("INSERT INTO users SET ?;", user, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Register successed");
  });
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    username,
  };
  const token = jwt.sign(data, jwtSecretKey, { expiresIn: "1h" });
  //test
  connection.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, data) => {
      if (data.length === 0) {
        res.status(404).json({ error: "This user is not exist" });
      } else {
        const hashpassword = data[0].password;
        const result = bcrypt.compareSync(password, hashpassword); // bu hissədə hash olunmamış və olunmuş parollar müqaisə edilir
        if (result) {
          res.status(200).json({ success: "correct password", token });
        } else {
          res.send({ error: "Password is't correct" });
        }
      }
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
