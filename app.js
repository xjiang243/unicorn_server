var express = require('express');

const bodyParser = require('body-parser');
var app = express();
var db = require('./db');
var comment = require('./comment');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(req.body);
});

app.get('/createComments', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(req.body);
});

app.post('/createComments',comment.createComments);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});