const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const donations = require("./donations");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "silent_auction",
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(donations(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});