const Order = require("../models/order");
const User = require("../models/user");

module.exports = {
  createOrder,
  getAllOrders,
};

async function createOrder(req, res) {
  try {
    const order = await Order.create(req.body);
    return res.status(200).json({ Order: order });
  } catch (err) {
    return res.status(400).json({ err });
  }
}

async function getAllOrders(req, res) {
  try {
    const order = await (await Order.find({ userId: req.params.userId }))
      .lean()
      .exec();
    return res.status(200).json({ Orders: order });
  } catch (err) {
    return res.status(400).json({ err });
  }
}
