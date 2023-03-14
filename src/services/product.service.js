// const JWT = require("jsonwebtoken");
const CustomError = require("../utils/custom-error");
const ProductSchema = require("../models/product.model");
class ProductService{
    constructor(params) {
        return
    }

    async getOneProduct(product_id) {
        if(!product_id) throw new CustomError("product_id is required");
        const product = await ProductSchema.findOne({product_id});
        if(!product) throw new CustomError("Product not found");
        return product;
    }

    async getAll() {
        return await ProductSchema.find({});
    }

    async dltProduct(product_id){
        if(!product_id) throw new CustomError("product_id is required");
        const dltedObj = await ProductSchema.deleteOne({product_id});
        if(!dltedObj) throw new CustomError("Product not found");
        return dltedObj;
    }

    async updateProduct(product_id,data){
        if(!product_id) throw new CustomError("product_id is required");
        const product = await ProductSchema.findOne({product_id});
        if(!product) throw new CustomError("Product not found");
            //Start updating product...
        // product.name = data.name?data.name:product.name;
        // product.description = data.description?data.description:product.description;
        // product.price = data.price?data.price:product.price;
        // product.image = data.image?data.image:product.image;
        const savedChnages = await ProductSchema.updateOne({product_id, $set:data});
        if(!savedChnages) throw new CustomError("Update failed. Try again. Later");
        return savedChnages;
    }
}

module.exports = new ProductService();
