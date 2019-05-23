var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// setup post api service
var post = require('../services/post')

//create post
router.post('/', function(req, res){
  post.create({title:req.body.title, content:req.body.content, author:req.body.author }, function(err, Response){
    if (err) return res.status(500).send("There was a problem creating the post.");
    res.status(200).send(Response);
  });
});



module.exports = router;
