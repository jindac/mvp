var express = require('express');
var controllers = require('./controllers');
var app = express();
var cors = require('cors');
var loadDB = require('./loadDB/loadDB.js');

app.use(cors());
app.options('*', cors());
app.listen(3000, function() {
  console.log('listening to ', 3000);
});

app.get('/cards', controllers.cards.get);

module.exports = app;