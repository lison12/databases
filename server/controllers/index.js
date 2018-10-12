var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'Authorization, Accept, X-Requested-With, X-HTTP-Method-Override, content-type',
  'access-control-max-age': 10 // Seconds.
};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get( (err, data) => {
        if (err) {
          throw err;
        } else {
          res.json(data);
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, (err, data) => {
        if (err) {
          throw err;
        } else {
          res.status(201);
          res.send(data);
        } 
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get( (err, data) => {
        if (err) {
          throw err;
        } else {
          res.json(data);
        }
      })
    },

    post: function (req, res) {
      models.users.post(req.body, (err, data) => {
        if (err) {
          throw err;
        } else {
          res.status(201);
          res.send(data);
        }
      })
    }
  }
};

