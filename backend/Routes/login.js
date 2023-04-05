const express = require("express");
const router = express.Router();
const pool = require("../pool.js");
const logger  = require("../Utils/serverLogger");

router.post("/", (req, res) => {
  logger.info(JSON.stringify(req.body));
  pool.query(
    "SELECT * from person where p_id = ?",
    [req.body.Email],
    (err, result) => {
      if (err || Object.keys(result).length === 0) {
        res.send({ message: "notok" });
        logger.error("incorrect password");
      } 
      else{
        res.send({message:"ok", username: result[0]['p_firstname']})
        //res.send({username: result[0]['p_firstname']})
      }
      
    }
  );
});

module.exports = router;
