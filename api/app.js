// app.js

var express = require('express');
var app = express();
var cors = require('cors');

// Allow CORS
app.use(cors());
app.options('*', cors());
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static('public'));

var userController = require('./controllers/userController');
app.use('/user', userController);

var postController = require('./controllers/postController');
app.use('/post', postController);

var allPostController = require('./controllers/allPostController');
app.use('/post/all', allPostController);

module.exports = app;
