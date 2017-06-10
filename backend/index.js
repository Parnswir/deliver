var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/golden-pancake';

MongoClient.connect(url, function(err, db) {

  if (!err) {
    console.log("Connected successfully to database server");
  }

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/', function (req, res) {
    res.send('hello world');
  });

  app.get('/midwives', function (req, res) {
    if (req.query.lon && req.query.lat) {
      db.collection('midwives').aggregate([
        {
            "$geoNear": {
               "near": [parseFloat(req.query.lon), parseFloat(req.query.lat)],
               "distanceField": "distance",
               "spherical": true,
               "distanceMultiplier": 6371000
            }
        },
        {
          "$redact": {
            "$cond": {
              "if": { "$lt": [ "$distance", "$travel" ] },
              "then": "$$KEEP",
              "else": "$$PRUNE"
            }
          }
        }
    ]).toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    } else {
      db.collection('midwives').find().toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    }
  });

  app.listen(8080, function () {
    console.log('Server listening on port 8080!');
  });

});
