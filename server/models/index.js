var db = require('../db');

module.exports = {
  cards: {
    getImage: function (cardName, callback) {
      // fetch image_src by cardName
      var queryStr = 'select * from images';
      if (cardName !== undefined) {
        queryStr = 'select images.image_src from images where images.name ="' + cardName + '"';

      }
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    }
  }
};
