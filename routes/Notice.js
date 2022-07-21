const express = require("express");
const utils = require("../utils");
const router = express.Router();

router.get("/", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "GetNoticeData");
  utils.executeQuery(storedProcedure, params, res);
});

module.exports = router;
