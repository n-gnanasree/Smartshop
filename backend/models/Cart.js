const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  name: String,
  price: Number,
  image: String,
  qty: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Cart", cartSchema);