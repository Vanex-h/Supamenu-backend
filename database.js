const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost", //  MySQL server host
  user: "Vanessa", // MySQL username
  password: "myroxane5", // MySQL password
  database: "sm", // MySQL database name
});

// Connect to the database
const connectingToDb = () => {
  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        console.log("Error connecting to Db");
        reject(err);
      } else {
        console.log("Connection established");
        resolve();
      }
    });
  });
};

module.exports = {
  connectingToDb,
  connection,
};
