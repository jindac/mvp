var fs = require('file-system');
var db = require('../db');
var _ = require('underscore');

var allCards;
var loadDB = function() {
  fs.readFile(__dirname + '/allCards.json', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      allCards = JSON.parse(data);
      delete allCards['Promo'];
      delete allCards['Tavern Brawl'];
      delete allCards['Hero Skins'];
      delete allCards['Missions'];
      delete allCards['Credits'];
      delete allCards['System'];
      delete allCards['Debug'];
      console.log(Object.keys(allCards));
      _.each(allCards, function(set) {
        _.each(set, function(card) {
          db.query('insert into cards (name, image_src, cost, class) values ("' + card.name + '", "' + card.img + '", ' + card.cost + ', "' + card.playerClass + '")', function(err, res) {
            if (err) {
              console.log('error: ', err);
            }
          });
        });
      });
    }
  });
};

console.log('loadDB loaded');
// loadDB();

// '/Volumes/Chan HD/Users/dachanman91/Desktop/Git/Hack Reactor/hrsf52-mvp/server/loadDB/allCards.json'
// name, cost, playerClass, img