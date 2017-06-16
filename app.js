var express = require('express');
var commentRouter = require('./router/commentRouter');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/');

const bodyParser = require('body-parser');
var app = express();
var comment = require('./models/comment');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/',commentRouter);

 app.listen(3000, function () {
   console.log('Example app listening on port 3000!');
 }); 