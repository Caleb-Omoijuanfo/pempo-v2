var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// setup user api service
var user = require('../services/user')

//find all users
router.get('/', function(req, res){
  user.findAll({}, function(err, Response){
    if (err) return res.status(500).send("There was a problem finding all users.");
    res.status(200).send(Response);
  });
});

module.exports = router;
