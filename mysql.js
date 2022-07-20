const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  //   insecureAuth: true,
});

exports.pool = connection;
