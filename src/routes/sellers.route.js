const { role } = require("../config");
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const upload = require("../middlewares/multer.middleware");
const ProductCtrl = require("../controllers/product.controller");
const SellerCtrl = require("../controllers/seller.controller");


router.get("/login",SellerCtrl.login);


router.post("/update-profile",SellerCtrl.updateUserProfile);

/**
 * @apiIgnore Not to be used
 *
 * @apiVersion 0.1.0
 * @api {delete} /users/:userid 8. Delete user
 * @apiPermission admin
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {string} userId The User ID.
 */

module.exports = router;
