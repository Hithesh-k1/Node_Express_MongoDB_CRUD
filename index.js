const express = require("express");
const bodyParser = require("body-parser");
const product = require("./routes/product.route"); // Imports routes for the products
const app = express();
var keys = require("./configs/keys");
const mongoose = require("mongoose");



// Connecting to the database
mongoose
  .connect(keys.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/products", product);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let port = 5000;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
