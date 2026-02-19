const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  countInStock: Number,
});

module.exports = mongoose.model("Product", productSchema);