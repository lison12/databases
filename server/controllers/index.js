var models = require('../models');

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

