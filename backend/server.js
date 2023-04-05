const express = require("express");
const dotenv = require("dotenv");
const request = require("request");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const register = require("./Routes/register");
const login = require("./Routes/login");
const admin = require("./Routes/admin");
var cors = require("cors");
const winston = require('winston');
const profile = require('./Routes/profile');


const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/register", register);
app.use("/login", login);
app.use("/admin", admin);
app.use("/profile", profile);

const PORT = 5001;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
module.exports = app;
