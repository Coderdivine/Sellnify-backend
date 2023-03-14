const clientDB = require("../database/mongo");
const ProductCollections = clientDB.collection("productCollections");

module.exports = ProductCollections;
