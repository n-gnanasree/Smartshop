const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
// PLACE ORDER
router.post("/", async (req, res) => {

  const order = await Order.create(req.body);

  res.json({
    message: "Order Placed",
    order
  });
});

module.exports = router;