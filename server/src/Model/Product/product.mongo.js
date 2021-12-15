const mongoose = require("mongoose");
const productSchema = require("./product.model");





const postNewProduct = async (product) => {
   const response =  await productSchema.create(product);
   return response;

}

const getAllProduct = async () => {
  const products = await productSchema.find({});
  if(products.length > 1){
    return products;
  }else{
      throw new Error("No product in the database")
  }
  
}

const getSingleProduct = async (id) => {
  const productId = mongoose.Types.ObjectId(id)
  const product = await productSchema.findOne({_id:productId});
  if(product){
    return product;
  }else{
    throw new Error("No data was found")
  }
}

module.exports = 

{
    postNewProduct,
    getAllProduct,
    getSingleProduct,

}