const express = require("express");
const utils = require("../utils");
const router = express.Router();

router.get("/currStatus", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetCurrenctStatus");
  utils.executeQuery(storedProcedure, params, res);
});

router.get("/notice", (req, res) => {
  const { params, storedProcedure } = utils.getParams(
    req,
    "GetRecentAbnormalData"
  );
  utils.executeQuery(storedProcedure, params, res);
});

router.get("/avg-data", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetAvgData");
  utils.executeQuery(storedProcedure, params, res);
});

router.get("/chart-data", (req, res) => {
  const { params, storedProcedure } = utils.getParams(
    req,
    "GetChartDataOfHome"
  );
  utils.executeQuery(storedProcedure, params, res);
});

module.exports = router;
