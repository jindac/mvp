var db = require('../db');

module.exports = {
  cards: {
    get: function (req, res) {
      models.cards.getImage('Backstab', function(err, results) {
        if (err) {
          console.log(err);
        }
        res.json(results);
      });
    }
  }
};
