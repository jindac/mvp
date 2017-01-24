var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'cards'
});

connection.connect();

module.exports = connection;