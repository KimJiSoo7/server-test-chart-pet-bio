const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const bodyParser = require("body-parser");
const app = express();

const PORT = "8081";

const connection = mysql.createPool({
  host: "petbio.awsome-app.kr",
  port: "3306",
  user: "petbio",
  password: "whgdmstodrkr0709",
  database: "petbio",
});

app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));

// * Routes * //
// API call :: /v2/*
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

app.get("/charts", (req, res) => {
  const sqlQuery = "call GetHeartRatesData(?)";
  //   const id = req.body.id;

  connection.query(sqlQuery, ["12345678"], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("select heart-rates succeed");
      res.send(result);
    }
  });
});

// app.post("/charts/heart", (req, res) => {
//   const sqlQuery = "call GetHeartRatesData(?)";
//   const id = req.body.deviceId;
//   console.log("POST>> ", req.body);

//   connection.query(sqlQuery, [id], (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("select heart-rates succeed");
//       res.send(result);
//     }
//   });
// });

app.post("/register", (req, res) => {
  const sqlQuery = "call IsValidId(?)";
  const id = req.body.id;

  console.log("req.body>> ", req.body);
  connection.query(sqlQuery, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("result>> ", result);
      res.send(result);
    }
  });
});

app.post("/register/update", (req, res) => {
  const sqlQuery = "call UpdatePhoneId(?, ?)";
  const id = req.body.id;
  const phoneId = req.body.phoneId;

  console.log("req.body>> ", req.body);
  connection.query(sqlQuery, [id, phoneId], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("result>> ", result.affectedRows);
      res.send(result);
    }
  });
});

app.get("/charts/heart", (req, res) => {
  const sqlQuery = "call GetHeartRatesData(?)";
  const id = req.query.deviceId;

  connection.query(sqlQuery, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("select heart-rates succeed");
      res.send(result);
    }
  });
});

app.post("/charts/breath", (req, res) => {
  const sqlQuery = "call GetHeartRatesData()";

  connection.query(sqlQuery, [null], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("select breath-rates succeed");
      res.send(result);
    }
  });
});

app.post("/notice/heart", (req, res) => {
  const query = "call GetAbnormalHeartRates(?)";

  const id = req.body.deviceId;

  connection.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("select abnormal-heart-rate succeed");
      res.send(result);
    }
  });
});

app.post("/notice/breath", (req, res) => {
  const query = "call GetAbnormalBreathRates(?)";

  const id = req.body.deviceId;

  connection.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("select abnormal-breath-rate succeed");
      res.send(result);
    }
  });
});

app.get("/", (req, res) => {
  res.send("web server in on running");
});

app.listen(PORT, () => {
  console.log(`listening port on ${PORT}`);
});
