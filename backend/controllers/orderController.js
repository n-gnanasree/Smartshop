const Order = require("../models/Order");

/* Create Order */

exports.createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount, paymentMethod } = req.body;

    const order = new Order({
      user: userId,
      items,
      totalAmount,
      paymentMethod
    });

    await order.save();

    res.json({ message: "Order Placed Successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


/* Get All Orders (ADMIN) */

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email");

    res.json(orders);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
