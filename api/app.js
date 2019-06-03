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

var postController = require('./controllers/postController');
app.use('/post', postController);

var allPostController = require('./controllers/allPostController');
app.use('/post/all', allPostController);

var postAuthorController = require('./controllers/postAuthorController');
app.use('/post/author', postAuthorController);

var postTitleController = require('./controllers/postTitleController');
app.use('/post/title', postTitleController);

var deleteManyController = require('./controllers/deleteManyController');
app.use('/post/many', deleteManyController);

module.exports = app;
