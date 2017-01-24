var db = require('../db');
var models = require('../models');

module.exports = {
  cards: {
    get: function (req, res) {
      console.log('url ====> ', req.url);
      models.cards.getImage(undefined, function(err, results) {
        if (err) {
          console.log(err);
        }
        res.json(results);
      });
    }
  }
};
