const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

const mongoOptions = { useNewUrlParser: true };

// Database Name
const dbName = 'pempo';

const Post = {

  create: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the user collection
        const collection = db.collection('posts');

        //Number of documents in the collection
        collection.countDocuments({},function(err, answer){
          let newPost = {
            id: answer + 1,
            title: data.title,
            content: data.content,
            author: data.author,
            image: data.image
          }
        //Insert document(newPost) into collection
        collection.insertOne(newPost, function(err, result){
          if(!err){
            response['status'] = "success";
            response['data'] = result;
            callback(null, response);
          }else {
            response['status'] = "errorInsert";
            response['data'] = newPost;
            callback(null, response);
          }
        });
      });
    });
  },

  findAll: function(data, callback){

    let response = {}

    // Create a new MongoClient
    const client = new MongoClient(url, mongoOptions);
    // Use connect method to connect to the Server
    client.connect(function(err) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      //get Database
      const db = client.db(dbName);

      // Get the documents collection
      const collection = db.collection('posts');

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
  },

  findID: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the user collection
        const collection = db.collection('posts');

        //find user by ID.
        collection.find({id:Number(data.id)}).toArray(function(err, docs) {
          if(!err){
            response['status'] = "success";
            response['data'] = docs;
            callback(null, response);
          }else {
            response['status'] = "error";
            response['data'] = data;
            callback(null, response);
          }
        });
    });
  },

  findAuthor: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the post collection
        const collection = db.collection('posts');

        //find post by author.
        collection.find({ author:data.author }).toArray(function(err, docs) {
          if(!err){
            response['status'] = "success";
            response['data'] = docs;
            callback(null, response);
          }else {
            response['status'] = "error";
            response['data'] = data;
            callback(null, response);
          }
        });
    });
  },

  findTitle: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the post collection
        const collection = db.collection('posts');

        //find post by author.
        collection.find({ title:data.title }).toArray(function(err, docs) {
          if(!err){
            response['status'] = "success";
            response['data'] = docs;
            callback(null, response);
          }else {
            response['status'] = "error";
            response['data'] = data;
            callback(null, response);
          }
        });
    });
  },

  delete: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the post collection
        const collection = db.collection('posts');

        //Delete document by post title
        collection.deleteOne({ id:Number(data.id) }, function(err, docs) {
          if(!err){
            response['status'] = "success";
            response['data'] = docs;
            callback(null, response);
          }else {
            response['status'] = "error";
            response['data'] = data;
            callback(null, response);
          }
        });
    });
  },

  deleteMany: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the post collection
        const collection = db.collection('posts');

        //Delete document by post title
        collection.deleteMany({ author: data.author }, function(err, docs) {
          if(!err){
            response['status'] = "success";
            response['data'] = docs;
            callback(null, response);
          }else {
            response['status'] = "error";
            response['data'] = data;
            callback(null, response);
          }
        });
    });
  },


}

module.exports = Post;
