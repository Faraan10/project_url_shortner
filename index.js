const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connection = require("./dbConnection");
const URL = require("./models/url");

connection();

app.use(express.json());

app.use("/url", require("./routes/url"));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
