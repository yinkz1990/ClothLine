const express = require('express');
const {postHttpProduct, getHttpAllProducts, getHttpSingleProduct} =require('./product.controller');


const productRouter = express.Router();


productRouter.post("/post-product", postHttpProduct);
productRouter.get("/products", getHttpAllProducts);
productRouter.get("/product/:id", getHttpSingleProduct);






module.exports = productRouter;
