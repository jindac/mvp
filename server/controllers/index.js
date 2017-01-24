var db = require('../db');
var models = require('../models');

module.exports = {
  cards: {
    get: function (req, res) {
      var cardName = req.url.slice(16);
      cardName = cardName.replace(/\+/g, ' ');
      console.log('cardName ====> ', cardName);
      // for (var i = 0; i < cardName.length; i++) {
      //   if (cardName[i] === )
      // }
      models.cards.getImage(cardName, function(err, results) {
        if (err) {
          console.log(err);
        }
        res.json(results);
      });
    }
  }
};
