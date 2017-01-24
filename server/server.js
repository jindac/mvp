var express = require('express');

var app = express();

app.listen(3000, function() {
  console.log('listening to ', 3000);
});

app.get('/decks', function(req, res) {
  res.json({worked: 'worked!'});
});

module.exports = app;