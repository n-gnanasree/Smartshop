const Product = require("../models/Product");

// Get all
const getProducts = async (req, res) => {
  const products =
    await Product.find();
  res.json(products);
};

// Add
const addProduct = async (req, res) => {
  const product =
    await Product.create(req.body);
  res.json(product);
};

// Delete
const deleteProduct = async (
  req,
  res
) => {
  await Product.findByIdAndDelete(
    req.params.id
  );
  res.json({
    message: "Product removed",
  });
};

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
};