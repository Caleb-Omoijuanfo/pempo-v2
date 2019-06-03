var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// setup post api service
var post = require('../services/post')

//create post
router.post('/', function(req, res){
  post.create({title:req.body.title, content:req.body.content, author:req.body.author, image:req.body.image }, function(err, Response){
    if (err) return res.status(500).send("There was a problem creating the post.");
    res.status(200).send(Response);
  });
});

//Find post
router.get('/', function(req, res){
  post.findID({ id:req.headers.id }, function(err, Response){
    if (err) return res.status(500).send("There was a problem finding the post.");
    res.status(200).send(Response);
  });
});

//Delete post
router.delete('/', function(req, res){
  post.delete({ id:req.body.id }, function(err, Response){
    if (err) return res.status(500).send("There was a problem deleting the post.");
    res.status(200).send(Response);
  });
});



module.exports = router;
