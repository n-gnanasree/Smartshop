const Cart = require("../models/Cart");

// Add to Cart
exports.addToCart = async (req, res) => {
  try {
    const item = await Cart.create(req.body);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Cart Items
exports.getCart = async (req, res) => {
  const items = await Cart.find();
  res.json(items);
};

// Remove Item
exports.deleteCartItem = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed" });
};