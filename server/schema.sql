DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roomName VARCHAR(20) NOT NULL
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(50) NOT NULL
); 

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roomname VARCHAR(20) NOT NULL,
  username VARCHAR(50) NOT NULL,
  -- roomID INT NOT NULL ,
  text VARCHAR(50) NOT NULL
  -- userID INT NOT NULL ,
  -- objID VARCHAR(20) NOT NULL,
  -- FOREIGN KEY (roomID) REFERENCES rooms(id),
  -- FOREIGN KEY (userID) REFERENCES users(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- var post = {roomname: body.roomName, userName: body.username, message: body.message, createdAt: body.createdAt};