const oracledb = require('oracledb');

async function executeDatabase(query, type, bindParams ) {

    let connection;
  
    try {
      connection = await oracledb.getConnection(  {
        user          : "******",
        password      : "**********",
        connectString : "***********"
      });
      
      if(type === 'SELECT'){
        const {metaData, rows} = await connection.execute(query);
        return {
          metaData,
          rows
        };
      }
      if(type === 'INSERT'){
        const result = await connection.execute(query, bindParams, { autoCommit: true });
        return result.rowsAffected;
      } 
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }

module.exports = executeDatabase;