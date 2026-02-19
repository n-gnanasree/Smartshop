const express = require("express");
const router = express.Router();

let cart = [];

// GET Cart
router.get("/", (req, res) => {
  res.json(cart);
});

// ADD Cart
router.post("/", (req, res) => {
  cart.push(req.body);
  res.json({ message: "Added to Cart" });
});

module.exports = router;