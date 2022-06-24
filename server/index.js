const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "crud",
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employe", (err, result) => {
    if (err) {
      console.warn(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/add", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employe (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.warn(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM employe WHERE id = ?", id, (err, result) => {
    if (err) {
      console.warn(err);
    } else {
      console.log("deleted");
      console.log("successfully");
    }
  });
});

app.listen(4000, () => {
  console.log("yes, server is running");
});
