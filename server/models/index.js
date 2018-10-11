var db = require('../db');

// do sql query and response back to client

module.exports = {
  messages: {
    get: function () {
      db.connect();
      db.query('SELECT message from messages', function(err, rows, fields) {
        if (err) throw err;
        console.log(rows[0].message)
      })
      db.end();
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

