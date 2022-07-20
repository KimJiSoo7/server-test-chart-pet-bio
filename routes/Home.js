const express = require("express");
const utils = require("../utils");
const router = express.Router();
const connection = require("../mysql").pool;

router.get("/currStatus", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetCurrenctStatus");
  utils.executeQuery(connection, storedProcedure, params, res);
});

router.get("/notice", (req, res) => {
  const { params, storedProcedure } = utils.getParams(
    req,
    "GetRecentAbnormalData"
  );
  utils.executeQuery(connection, storedProcedure, params, res);
});

router.get("/avg-data", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetAvgData");
  utils.executeQuery(connection, storedProcedure, params, res);
});

router.get("/chart-data", (req, res) => {
  const { params, storedProcedure } = utils.getParams(
    req,
    "GetChartDataOfHome"
  );
  utils.executeQuery(connection, storedProcedure, params, res);
});

module.exports = router;
