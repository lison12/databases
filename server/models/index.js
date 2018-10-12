var db = require('../db');

// do sql query and response back to client

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * from messages', function(err, rows) {
        if (err) callback(err);
        else {
          callback(null, rows);
        }
      })
    }, // a function which produces all the messages
    post: function (body, callback) {
      var post = {roomName: body.roomName, userName: body.userName, message: body.message, createdAt: body.createdAt};
      db.connection.query(`INSERT INTO messages (roomName,userName,message) VALUES (?, ?, ?)`, [body.roomName,body.userName,body.message], function(err, rows) {
        if (err) callback(err);
        else {
          callback(null, rows);
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.connection.query('SELECT userName from users', function(err, rows) {
        if (err) callback(err);
        else {
          callback(null, rows);
        }
      })
      
    },
    post: function (body, callback) {
      db.connection.query(`INSERT INTO users (userName) VALUES (?)`, [body.userName], function(err, rows) {
        if (err) callback(err);
        else {
          callback(null, rows);
        }
      })
    }
  }
};