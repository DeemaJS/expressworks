var express = require('express');
var path = require('path');
var app = express();
var parser = require('body-parser')

app.use(parser.urlencoded({extended:false}));

app.post('/form', function(req, res) {
	res.send(req.body.str.split('').reverse().join(''));
})

app.listen(process.argv[2]);