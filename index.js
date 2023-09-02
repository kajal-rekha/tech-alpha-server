require("dotenv").config();

const express = require("express");
const productRoutes = require("./routes/productRoute");
const port = process.env.PORT || 4000;

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// routes
app.use("/api/products", productRoutes);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
