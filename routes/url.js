const express = require("express");
const router = express();
const {
  getAllUrls,
  generateShortUrl,
  redirectUrl,
} = require("../controllers/url");

router.get("/", getAllUrls).get("/:shortId", redirectUrl);

router.post("/", generateShortUrl);

module.exports = router;
