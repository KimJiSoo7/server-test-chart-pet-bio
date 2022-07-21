const pool = require("./mysql");

module.exports = {
  getParams: function (req, storedProcedure) {
    const params = [];
    let reqContents;
    let procedure = `call ${storedProcedure}(`;

    switch (req.method) {
      case "GET":
        reqContents = req.query;
        break;
      case "POST":
        reqContents = req.body;
        break;
      case "PUT":
        //   reqContents = req.query;
        break;
      case "DELETE":
        //   reqContents = req.body;
        break;
    }

    for (let prop in reqContents) {
      params.push(reqContents[prop]);
      procedure += "?,";
    }
    if (params.length) {
      procedure = procedure.substring(0, procedure.length - 1).concat(")");
    } else {
      procedure += ")";
    }
    // console.log({ params: params, storedProcedure: procedure });
    return { params: params, storedProcedure: procedure };
  },
  // executeQuery: function (conn, sp, params, res) {
  //   conn.query(sp, params, (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(`${sp} success`);
  //       res.send(result);
  //     }
  //   });
  // },
  executeQuery: function (sp, params, res) {
    pool.getConnectionPool((conn) => {
      try {
        conn.query(sp, params, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`${sp} success`);
            res.send(result);
          }
        });
      } catch (e) {
        console.log("Error >>  ", e);
      } finally {
        conn.release();
      }
    });
  },
};
