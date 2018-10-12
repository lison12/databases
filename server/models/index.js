var db = require('../db');

// do sql query and response back to client

var User = db.connection.define('User', {
  username: Sequelize.STRING
});

var Message = db.connection.define('Message', {
  username: Sequelize.string,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

module.exports = {
  messages: {
    get: function (callback) {
      // db.connection.query('SELECT * from messages', function(err, rows) {
      //   if (err) callback(err);
      //   else {
      //     callback(null, rows);
      //   }
      // })
      
    }, // a function which produces all the messages
    post: function (body, callback) {
      db.connection.query(`INSERT INTO messages (roomname,username,text) VALUES (?, ?, ?)`, [body.roomname,body.username,body.text], function(err, rows) {
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
      db.connection.query('SELECT username from users', function(err, rows) {
        if (err) callback(err);
        else {
          callback(null, rows);
        }
      })
      
    },
    post: function (body, callback) {
      db.connection.query(`INSERT INTO users (username) VALUES (?)`, [body.username], function(err, rows) {
        if (err) callback(err);
        else {
          callback(null, rows);
        }
      })
    }
  }
};