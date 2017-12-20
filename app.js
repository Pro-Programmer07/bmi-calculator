var express = require('express');
var app = express();

//to provide static files to web browser
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/standard', function (req, res) {
  res.sendFile(__dirname + '/standard.html');
});

app.get('/metric', function (req, res) {
  res.sendFile(__dirname + '/metric.html');
});

app.listen(3000);