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
app.get("/getlasttwocoins", function (req, res) {
  // adminpanel1 də son əlavə edilən 2 coin göstərmək üçün fetch
  connection.query(
    "SELECT * FROM coin_informations ORDER BY id DESC LIMIT 2;",
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
    `SELECT * FROM coin_informations WHERE category = "${keyword} coins";`,
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
    `SELECT * FROM coin_informations WHERE id = "${id}";`,
    (err, data) => {
      if (err) {
        return res.status(500).send("There is have a error");
      }
      res.json(data);
    }
  );
});
//region
// app.get("/bullion", function (req, res) {
//   connection.query(
//     'SELECT * FROM coin_informations WHERE category = "Bullion coins";',
//     (err, data) => {
//       if (err) {
//         return res.status(500).send("There is hava a proble");
//       }
//       res.json(data);
//     }
//   );
// });
// app.get("/exclusive", function (req, res) {
//   connection.query(
//     'SELECT * FROM coin_informations WHERE category = "Exclusive coins";',
//     (err, data) => {
//       if (err) {
//         return res.status(500).send("there is have a problem");
//       }
//       res.json(data);
//     }
//   );
// });
// app.get("/commemorative", function (req, res) {
//   connection.query(
//     'SELECT * FROM coin_informations WHERE category = "Commemorative coins";',
//     (err, data) => {
//       if (err) {
//         return res.status(500).send("there is have a problem");
//       }
//       res.json(data);
//     }
//   );
// });
app.get("/", function (req, res) {
  //Home page də atılan category üçün fetch
  connection.query(
    "SELECT * FROM coin_informations_category_name;",
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
    "INSERT INTO coin_informations SET ?",
    [newinfo],
    (err, data) => {
      if (err) return res.status(500).json(err);
      return res.send("Added new info", data);
    }
  );
});
// app.put(){};
// app.delete(){};

app.listen(3000, function () {
  console.log("connected successfully with port 3000");
});
