const express = require("express");
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();


app.use('/products', product);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});