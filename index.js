const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connection = require("./dbConnection");
const URL = require("./models/url");
// The below line is for locating ejs files for server side rendering
const path = require("path");

const staticRoute = require("./routes/staticRouter");

connection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ejs for server side rendering ( Embedded Javascript )
// ejs is a templating engine which is compatible with express and is
// used for server side rendereing
// the below line is used to tell that we are using ejs as our engine
// for redering the HTML files
app.set("view engine", "ejs");

// We have to tell express that we are storing ejs files at some location
// basically telling express that the ejs files are located in views folder
app.set("views", path.resolve("./views"));

// app.get("/test", async (req, res) => {
//   const allUrls = await URL.find({});
//   return res.render("home", {
//     // passing data in homepage as variables
//     urls: allUrls,
//   });
// });

app.use("/url", require("./routes/url"));

app.use("/", staticRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
