const Product = require("../models/Product");

// GET all products
// on an order and on the dashboard

const getProducts = async (req, res) => {
  try {
    await Product.find();
    res.json();
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Server error" });
  }
};

// GET a product on an order and on the dashboard (by id)
// Getting a product from an order, there should be a link attached to each product redirecting them to the single product.

const getProductsbyID = async (req, res) => {
  try {
    const prod = await Product.findById(req.params.id);
    await Product.find();
    res.json(prod);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "product not found" });
  }
};
// CREATE(post) a product
// user not authorized to do

// UPDATE(put) a product (by id)
// ratings? maybe in the future as we work on the project

// DELETE a product (by id)
// user should not be authorized to delete products or edit there order

module.exports = {
  getProducts,
  getProductsbyID,
};
