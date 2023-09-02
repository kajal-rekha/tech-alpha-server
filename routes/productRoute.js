const express = require("express");
const Product = require("../models/productModel");

// router
const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  res.json({ message: "GET all products!" });
});

//GET a single product
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single product!" });
});

// POST a product
router.post("/", async (req, res) => {
  const data = req.body;

  try {
    const product = await Product.create({
      ...data,
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
module.exports = router;
