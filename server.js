// const { SERVER_PORT, HOST } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// const bodyParser = require("body-parser");

const PORT = process.env.SERVER_PORT || 8082;
// const PORT = 8081;

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

const registerRoute = require("./routes/Register");
const noticeRoute = require("./routes/Notice");
const homeRoute = require("./routes/Home");
const chartRoute = require("./routes/Charts");

app.use("/register", registerRoute);
app.use("/notice", noticeRoute);
app.use("/home", homeRoute);
app.use("/charts", chartRoute);

app.get("/", (req, res) => {
  res.send("web server in on running");
});

app.listen(PORT, () => {
  console.log(`listening port on ${PORT}`);
});
