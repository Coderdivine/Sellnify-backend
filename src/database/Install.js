const { MongoClient } = require('mongodb');
const fs = require('fs');
const csv = require('csv-parser');
const sellersDatasets = require("../Assets/olist_sellers_dataset.csv");
const productDatasets = require("../Assets/olist_products_dataset.csv");
const orderitemsDatasets = require("../Assets/olist_order_items_dataset.csv");
const { MONGODB_URI } = require("../config");
const dbName = 'sellnify';

const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });

client.connect((err) => {
  if (err) throw err;

  const db = client.db(dbName);
  const collection = db.collection('sellersCollections');

  const data = [];

  fs.createReadStream(sellersDatasets)
    .pipe(csv())
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', () => {
      console.log('CSV file successfully processed');

      collection.insertMany(data, (err, result) => {
        if (err) throw err;

        console.log(`${result.insertedCount} documents inserted`);
        client.close();
      });
    });
});
