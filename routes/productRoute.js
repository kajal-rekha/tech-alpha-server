const express = require("express");

const {
  postProduct,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/productController");

// router
const router = express.Router();

// GET all products
router.get("/", getAllProducts);

//GET a single product
router.get("/:id", getSingleProduct);

// POST a product
router.post("/", postProduct);
module.exports = router;
