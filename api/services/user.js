const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'db';


const User = {

  create: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the user collection
        const collection = db.collection('users');

        var userObj = {
          "firsName": data.firstName,
          "lastName": data.lastName,
          "address": data.address,
          "age": data.age
        }

        collection.insertOne(userObj, function(err, result){
          if(!err){
            response['status'] = "success";
            response['data'] = result;
            callback(null, response);
          }else {
            response['status'] = "errorInsert";
            response['data'] = userObj;
            callback(null, response);
          }

        });
      });
  },

  findAll: function(data, callback){

    let response = {}

    // Create a new MongoClient
    const client = new MongoClient(url);
    // Use connect method to connect to the Server
    client.connect(function(err) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      //get Database
      const db = client.db(dbName);

      // Get the documents collection
      const collection = db.collection('users');

      // Find some documents
      collection.find({}).toArray(function(err, docs) {
        if(!err){
          response['status'] = 'success';
          response['data'] = docs;
          callback(null, response);
        }else {
          response['status'] = 'errorDB';
          response['data'] = data;
          callback(null, response);
        }
      });
    });
  }
}

module.exports = User;
