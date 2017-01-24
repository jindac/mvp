CREATE DATABASE cards;

USE cards;

DROP TABLE IF EXISTS `images`;

CREATE TABLE images (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  name varchar(200)  NOT NULL,
  image_src varchar(200)  NOT NULL,
  PRIMARY KEY (ID)
);

/* Sample Data */
insert into images (name, image_src) values ("Ancestral Healing", "http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_041.png");

insert into images (name, image_src) values ("Backstab", "http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_072.png");

insert into images (name, image_src) values ("Innervate", "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_169.png");

insert into images (name, image_src) values ("Mirror Image", "http://wow.zamimg.com/images/hearthstone/cards/enus/original/CS2_mirror.png");