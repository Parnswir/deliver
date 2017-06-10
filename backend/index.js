var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/golden-pancake';

MongoClient.connect(url, function(err, db) {

  if (!err) {
    console.log("Connected successfully to database server");
  }

  app.get('/', function (req, res) {
    res.send('hello world');
  });

  app.get('/midwives', function (req, res) {
    db.collection('midwives').find().toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  app.listen(8080, function () {
    console.log('Server listening on port 8080!');
  });

});
