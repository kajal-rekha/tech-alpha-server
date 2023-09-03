require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoute");

const port = process.env.PORT || 4000;

// express app
const app = express();

// middleware
app.use(
  cors({
    Credentials: true,
  })
);
app.use(express.json());

// routes
app.use("/api/products", productRoutes);

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for tequest
    app.listen(port, () => {
      console.log(`connected to mongo and listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
