const express = require("express");
const utils = require("../utils");
const router = express.Router();

router.get("/currStatus", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetHomeStatus");
  utils.executeQuery(storedProcedure, params, res);
});

router.get("/notice", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetHomeNotice");
  utils.executeQuery(storedProcedure, params, res);
});

router.get("/avg-data", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetHomeAvgData");
  utils.executeQuery(storedProcedure, params, res);
});

router.get("/chart-data", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetHomeChart");
  utils.executeQuery(storedProcedure, params, res);
});

module.exports = router;
