const {postNewProduct, getAllProduct, getSingleProduct} = require("../../Model/Product/product.mongo");



async function postHttpProduct (req, res, next) {
    const body = req.body;
    const product = await postNewProduct(body)
    return res.status(201).json(product)
  
}

async function getHttpAllProducts (req, res, next){
    const products = await getAllProduct({});
    return res.status(200).json(products);
}

async function getHttpSingleProduct (req, res, next){
    const product =await getSingleProduct(req.params.id);
    return res.status(200).json(product);
}
module.exports ={
    postHttpProduct,
    getHttpAllProducts,
    getHttpSingleProduct,
}