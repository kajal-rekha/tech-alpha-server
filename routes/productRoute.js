const express = require("express");
const {
  postProduct,
  getAllProducts,
  singleProduct,
} = require("../controllers/productController");

// router
const router = express.Router();

// GET all products
router.get("/", getAllProducts);

//GET a single product
router.get("/:id", singleProduct);

// POST a product
router.post("/", postProduct);
module.exports = router;
