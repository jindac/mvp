CREATE DATABASE hs;

USE hs;

DROP TABLE IF EXISTS `cards`;

CREATE TABLE cards (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(200)  NOT NULL,
  image_src varchar(200)  NOT NULL,
  cost int NOT NULL,
  class varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE decks (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(200)  NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE deckcards (
  id int NOT NULL AUTO_INCREMENT,
  deck_id int NOT NULL,
  card_id int NOT NULL,
  PRIMARY KEY (ID)
);

/* Sample Data */
-- insert into images (name, image_src) values ("Ancestral Healing", "http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_041.png");

-- insert into images (name, image_src) values ("Backstab", "http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_072.png");

-- insert into images (name, image_src) values ("Innervate", "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_169.png");

-- insert into images (name, image_src) values ("Mirror Image", "http://wow.zamimg.com/images/hearthstone/cards/enus/original/CS2_mirror.png");