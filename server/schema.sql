CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  roomID INT NOT NULL REFERENCES rooms(id),
  message VARCHAR(50) NOT NULL,
  userID INT NOT NULL REFERENCES users(id),
  objID VARCHAR(20) NOT NULL,
  createdAt DATE NOT NULL,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomName VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
); 


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

