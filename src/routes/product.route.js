const router = require("express").Router();
const ProductCtrl = require("../controllers/product.controller");

/**
 * Get all products...
 * @params {GET} 
 * 
 */
router.get("/",ProductCtrl.allProducts);

/**
 * @params {GET} by product_id... 
 * 
 */
router.get("/:product_id",ProductCtrl.getProduct);

/**
 * Updated product details...
 * @params {PUT} product_id
 */
router.post("/update/:product_id",ProductCtrl.updateProduct);

/**
 * Dlt a product...
 * @params {DELETE} by product_id
 * 
 */

router.delete("/dlt/:product_id",ProductCtrl.dlt);





module.exports = router;
