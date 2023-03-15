const clientDB = require("../database/mongo");
const SellersCollections = clientDB.collection("sellnify-sellers");

module.exports = SellersCollections;
