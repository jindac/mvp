var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'hs'
});

connection.connect();

module.exports = connection;