const express = require("express");
const router = express();
const {
  getAllUrls,
  generateShortUrl,
  renderPageShortId,
} = require("../controllers/url");

router.get("/", getAllUrls).get("/:id", renderPageShortId);

router.post("/", generateShortUrl);

module.exports = router;
