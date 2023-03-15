const MongoClient = require('mongodb').MongoClient;
const { MONGODB_URI } = require("../config");
const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    console.log("IN")
    if (err) {
      console.error("<::: Couldn't connect to database",err);
      return;
    }
    console.log(':::> Connected successfully to MongoDB server');
})
  
module.exports = client.db("test");
