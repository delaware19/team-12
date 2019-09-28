//var todo = require('../app/models/todo');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "10.88.3.135",
  user: "test",
  password: "testPASS12#"
});

con.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
}

  );