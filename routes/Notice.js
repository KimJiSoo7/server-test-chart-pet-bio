const express = require("express");
const utils = require("../utils");
const router = express.Router();
const connection = require("../mysql").pool;

router.get("/", (req, res) => {
  console.log(req.query);
  const { params, storedProcedure } = utils.getParams(req, "GetAbnormalData");
  utils.executeQuery(connection, storedProcedure, params, res);
});

module.exports = router;
