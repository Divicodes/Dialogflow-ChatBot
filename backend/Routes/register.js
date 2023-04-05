const express = require("express");
const router = express.Router();
const pool = require("../pool.js");
const bcrypt = require("bcrypt");
const logger  = require("../Utils/serverLogger");

router.post("/", (req, res) => {
  logger.info("POST /register");
  logger.info("request: "+ JSON.stringify(req.body));
  
  pool.query(
    "INSERT INTO person (type,p_firstname,p_lastname,p_id,p_address,dob,password) VALUES (?,?,?,?,?,?,?)",
    [
      req.body.types,
      req.body.FirstName,
      req.body.LastName,
      req.body.Email,
      req.body.address,
      req.body.DOB,
      req.body.Password,
    ],
    (err, result) => {
      if (err) {
        logger.error(err);
        res.send({ message: "notok" });
      } else {    
        logger.info("Registered succesfully" + JSON.stringify(result));
        res.send({ message: "ok" });
      }
    }
  );

});

module.exports = router;
