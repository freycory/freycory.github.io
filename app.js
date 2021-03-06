const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const donations = require("./donations");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "silent_auction",
// });

// connection.connect();

const port = process.env.PORT || 3000;

const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to this site.");
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
