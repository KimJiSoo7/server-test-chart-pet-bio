const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 1000,
  connectTimeout: 7500,
  // insecureAuth: true,
});

exports.getConnectionPool = (callbackFn) => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log(err);
    } else {
      callbackFn(conn);
    }
  });
};

// exports.pool = pool;
