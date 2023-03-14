const clientDB = require("../database/mongo");
const SellersCollections = clientDB.collection("sellersCollections");

module.exports = SellersCollections;
