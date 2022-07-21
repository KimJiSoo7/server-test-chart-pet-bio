const mysql = require("mysql");
require("dotenv").config();

/**
 * connection pool: https://hyuntaeknote.tistory.com/12
 * ideal pool size: (numberOfCPUCore * 2) + effective_spindle_count(numberOfHardDisk)
 * local enviroment: numberOfCPUCore 2, numberOfHardDisk 1(SSD) ==> 5
 */
const pool = mysql.createPool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 10, // SSD는 처리속도 빨라서 병렬처리처럼 느껴질 수 있으니 이상적인 사이즈보다 조금 더 늘려도 될 듯?
  connectTimeout: 10000,
  // queueLimit: 16,
  insecureAuth: true,
});

exports.getConnectionPool = (callbackFn) => {
  pool.getConnection((err, conn) => {
    if (!err) {
      callbackFn(conn);
    }
  });
};

// exports.pool = pool;
