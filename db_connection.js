var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'ffkk.cgiqg4kguirw.us-west-2.rds.amazonaws.com',
  user     : 'flo',
  password : 'flash123',
  port     : '3306'
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();
