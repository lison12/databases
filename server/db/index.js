var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
})


// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'dbuser',
//   password : 's3kreee7',
//   database : 'my_db'
// });

