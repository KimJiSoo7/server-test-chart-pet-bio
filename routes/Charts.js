const express = require("express");
const utils = require("../utils");
const router = express.Router();
const connection = require("../mysql").pool;

router.get("/D", (req, res) => {
  // get parameters and a stored procedure
  const { params, storedProcedure } = utils.getParams(req, "GetChartDay");
  utils.executeQuery(connection, storedProcedure, params, res);
});

router.get("/W", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetChartWeek");
  utils.executeQuery(connection, storedProcedure, params, res);
});

router.get("/M", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetChartMonth");
  utils.executeQuery(connection, storedProcedure, params, res);
});

module.exports = router;
