var express = require('express');

var app = express();

app.get('/items', function(req, res) {
    var items = [
      {
        id: 1,
        text: "Item 1"
      },
      {
        id: 2,
        text: "Item 2"
      }
    ];

    res.json({items: items});
});

app.get('/user', function(req, res) {
    res.json({name: "Ray", age: 25});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

exports.app = app;
