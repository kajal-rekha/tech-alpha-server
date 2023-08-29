const express = require("express");

const {
  getAllProducts,
  getSingleProduct,
  getCategoryProducts,
} = require(".../controllers/productController");

//Router
const router = express.Router();

//GET all products
router.get("/", getAllProducts);

//GET a single product
router.get("/:productId", getSingleProduct);

// GET products bt category
router.get("/category/:category", getCategoryProducts);

module.exports = router;
