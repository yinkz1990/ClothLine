const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviews: [{ 
      userid: {type: mongoose.Schema.Types.ObjectId, required: true}, 
      name: {type: String, required: true},
      comment:{type: String},
      rating: {type: Number, required: true}
    }],

  countInStock: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("Product", productSchema);