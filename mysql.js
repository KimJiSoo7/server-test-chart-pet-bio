require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createPool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  insecureAuth: true,
});

exports.pool = connection;
