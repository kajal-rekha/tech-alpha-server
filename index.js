require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

// VARIABLES
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

//EXPRESS APP
const app = express();

// BYPASS API

// TEST API
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Tech Alpha server." });
});

// DATABASE
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
