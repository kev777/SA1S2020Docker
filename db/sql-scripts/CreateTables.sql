CREATE TABLE news (
  id_tweet INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  tweet VARCHAR(100),
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);