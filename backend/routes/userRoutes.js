const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const productController = require("../controllers/productController.js");
const orderController = require("../controllers/orderController.js");

router.get("/users", userController.getUsers);

router.get("/products", productController.getProducts);

router.get("/products/:id", (req, res) => {
  const prod = products.find((x) => x.id === req.params.id);
  res.send(prod);
});
router.get("/orders", orderController.getOrders);
