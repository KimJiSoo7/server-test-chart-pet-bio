const express = require("express");
const utils = require("../utils");
const router = express.Router();
const connection = require("../mysql").pool;

// router.get("/", (req, res) => {
//   res.send({ data: "Comment" });
// });

// router.post("/", (req, res) => {
//   res.send({ data: "Comment Created :)" });
// });

// router.put("/", (req, res) => {
//   res.send({ data: "Comment Updated" });
// });

// router.delete("/", (req, res) => {
//   res.send({ data: "Comment Deleted :(" });
// });

router.get("/", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "IsValidDeviceId");
  utils.executeQuery(connection, storedProcedure, params, res);
});

router.post("/", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "RegisterDevice");
  utils.executeQuery(connection, storedProcedure, params, res);
});

module.exports = router;