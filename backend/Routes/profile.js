const express = require("express");
const router = express.Router();
const pool = require("../pool.js");
const logger  = require("../Utils/serverLogger");

router.post("/", (req, res) => {
  logger.info(JSON.stringify(req.body.Email));
  pool.query(
    "SELECT * from person where p_id = ?",
    [req.body.Email],
    (err, result) => {
      if (err || Object.keys(result).length === 0) {
        res.send({ message: "notok" });
        logger.error("incorrect info");
      } 
      else{
        logger.info("in ok");
      }
    }
  );
});

module.exports = router;