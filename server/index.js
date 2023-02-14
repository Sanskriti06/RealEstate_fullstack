const express = require("express");
const mysql = require("mysql");
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "loginsystem",
});

const db2 = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "estate",
});

app.get("/", (req, res) => {
    res.json("hello");
  });
  
  app.get("/houses", (req, res) => {
    const q = "SELECT * FROM houses";
    db2.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });
  
  app.post("/houses", (req, res) => {
    const q = "INSERT INTO houses(`address`, `location`, `type`, `price`) VALUES (?)";
  
    const values = [
      req.body.address,
      req.body.location,
      req.body.type,
      req.body.price,
    ];
  
    db2.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.delete("/houses/:id", (req, res) => {
    const houseId = req.params.id;
    const q = " DELETE FROM houses WHERE id = ? ";
  
    db2.query(q, [houseId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.put("/houses/:id", (req, res) => {
    const houseId = req.params.id;
    const q = "UPDATE houses SET `address`= ?, `location`= ?, `type`= ?, `price`= ? WHERE id = ?";
  
    const values = [
      req.body.address,
      req.body.location,
      req.body.type,
      req.body.price,
    ];
  
    db2.query(q, [...values,houseId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
















app.post('/register', (req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "INSERT INTO register (username,email,password) VALUES (?,?,? )",
        [username, email, password],
        (err, result) => {
            console.log(err);
        }
    );
});

app.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "SELECT * FROM register WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if(err) {
                res.send({err: err});
            }

            if(result.length>0) {
                res.send(result);
            }
            else{
                res.send({message: "Wrong email/password combination"});
            }
        }
    );
});

app.listen(3001, () => {
    console.log("running on 3001");
})