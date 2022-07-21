const express = require("express");
const utils = require("../utils");
const router = express.Router();

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
  const { params, storedProcedure } = utils.getParams(req, "GetRegisterId");
  utils.executeQuery(storedProcedure, params, res);
});

router.post("/", (req, res) => {
  const { params, storedProcedure } = utils.getParams(req, "PutRegisterDevice");
  utils.executeQuery(storedProcedure, params, res);
});

module.exports = router;
