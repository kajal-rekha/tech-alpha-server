const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ message: "POST a new  product" });
});
module.exports = router;
