// require("dotenv").config();
// const { SERVER_PORT, HOST } = process.env;
const express = require("express");
const connection = require("./mysql").pool;
const cors = require("cors");
const utils = require("./utils");
// const bodyParser = require("body-parser");
const app = express();

// const PORT = process.env.SERVER_PORT || 8081;
const PORT = 8081;

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

// app.get("/charts", (req, res) => {
//   const sqlQuery = "call GetHeartRatesData(?)";
//   //   const id = req.body.id;

//   connection.query(sqlQuery, ["12345678"], (err, result) => {
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

app.get("/charts/D", (req, res) => {
  // get parameters and a stored procedure
  const { params, storedProcedure } = utils.getParams(req, "GetChartDay");
  utils.executeQuery(connection, storedProcedure, params, res);
});

app.get("/charts/W", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetChartWeek");
  utils.executeQuery(connection, storedProcedure, params, res);
});

app.get("/charts/M", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetChartMonth");
  utils.executeQuery(connection, storedProcedure, params, res);
});

app.post("/notice", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetAbnormalData");
  utils.executeQuery(connection, storedProcedure, params, res);
});

app.post("/home/currStatus", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetCurrenctStatus");
  utils.executeQuery(connection, storedProcedure, params, res);
});

app.post("/home/notice", (req, res) => {
  const { params, storedProcedure } = utils.getParams(
    req,
    "GetRecentAbnormalData"
  );
  utils.executeQuery(connection, storedProcedure, params, res);
});

app.post("/home/avg-data", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetAvgData");
  utils.executeQuery(connection, storedProcedure, params, res);
});

app.post("/home/chart-data", (req, res) => {
  const { params, storedProcedure } = utils.getParams(
    req,
    "GetChartDataOfHome"
  );
  utils.executeQuery(connection, storedProcedure, params, res);
});

app.get("/", (req, res) => {
  res.send("web server in on running");
});

app.listen(PORT, () => {
  console.log(`listening port on ${PORT}`);
});
