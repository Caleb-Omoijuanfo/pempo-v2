var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// setup post api service
var post = require('../services/post')

//Find post by Title
router.get('/', function(req, res){
  post.findTitle({ title:req.headers.title }, function(err, Response){
    if (err) return res.status(500).send("There was a problem finding the post.");
    res.status(200).send(Response);
  });
});



module.exports = router;
