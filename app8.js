var express = require('express');
var app = express();
var fs =require('fs');

app.get('/books', function (req, res, next) {
  fs.readFile(process.argv[3], function (err, data) {
  	if (err) return res.sendStatus(500); // was throw err
  	res.send(JSON.parse(data));
  })
});

app.listen(process.argv[2]);