const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});