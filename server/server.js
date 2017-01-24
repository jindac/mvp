var express = require('express');
var controller = require('./controllers');
var app = express();

app.listen(3000, function() {
  console.log('listening to ', 3000);
});

app.get('/cards', controllers.cards.get);

module.exports = app;