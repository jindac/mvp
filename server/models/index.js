var db = require('../db');

module.exports = {
  cards: {
    getImage: function (cardName, callback) {
      // fetch image_src by cardName
      // var queryStr = 'select * from cards where cards.class = "neutral"';
      // if (cardName !== undefined) {
      var queryStr = 'select cards.image_src from cards where cards.name like "' + cardName + '%"';

      // }
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    }
  }
};
