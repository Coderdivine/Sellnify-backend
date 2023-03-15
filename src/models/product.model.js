const clientDB = require("../database/mongo");
const ProductCollections = clientDB.collection("sellnify-products");

module.exports = ProductCollections;
