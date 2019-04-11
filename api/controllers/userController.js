var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// setup user api service
var user = require('../services/user')

//create user
router.post('/', function(req, res){
  user.create({firstName:req.body.firstName, lastName:req.body.lastName, address:req.body.address, age:req.body.age}, function(err, Response){
    if (err) return res.status(500).send("There was a problem creating the user.");
    res.status(200).send(Response);
  });
});



module.exports = router;
