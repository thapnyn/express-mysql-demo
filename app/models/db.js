'user strict';

//require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

var mysql = require('mysql');

// local mysql db connection
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;