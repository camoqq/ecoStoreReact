const Order = require("../models/Order");

// GET all orders
// only when user is signed in, on there previous orders tab

const getOrders = async (req, res) => {
  try {
    await Order.find();
    res.json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
// GET a order (by id)
// only when user is signed in, on there previous orders tab, maybe on a different page?

const getOrdersbyID = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    await User.find();
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "order not found" });
  }
};
// CREATE(post) a order
// need atleast one product to create an order, only when user is signed in

// UPDATE(put) a order (by id)
// only when user is signed in

// DELETE a order (by id)
// only when user is signed in, maybe we can implement a certain amount of time
// they have before they are able to delete the order?

module.exports = {
  getOrders,
  getOrdersbyID,
};
