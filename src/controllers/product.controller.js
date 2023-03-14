const response = require("../utils/response");
const ProductService = require("../services/product.service");

class ProductController{
    async getProduct(req,res){
        //Get product details...
        const result = await ProductService.getOneProduct(req.params.product_id);
        //product_id
        res.status(200).send(response("Product fetched", result));
    }

    async allProducts(req,res){
        const result = await ProductService.getAll();
        res.status(200).send(response("All product fetched", result));
    }

    async updateProduct(req,res){
        const result = await ProductService.updateProduct(req.params.product_id,req.body);
        res.status(200).send(response("Product Updated", result));
    }
    
    async dlt(req,res){
        const result = await ProductService.dltProduct(req.params.product_id);
        res.status(200).send(response("Product deleted", result));

    }
}

module.exports = new ProductController();