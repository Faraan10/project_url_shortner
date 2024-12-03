const URL = require("../models/url");
const shortid = require("shortid");

const getAllUrls = async (req, res) => {
  const data = await URL.find({});
  return res.status(200).json(data);
};
const generateShortUrl = async (req, res) => {
  const { redirectUrl } = req.body;

  const uniqueId = shortid();

  if (!redirectUrl) {
    return res.status(400).json({ msg: "url fields is required" });
  }

  const createUrl = await URL.create({
    shortId: uniqueId,
    redirectUrl: redirectUrl,
    visitHistory: [],
  });
  return res.status(201).json({ uniqueId });
};

const renderPageShortId = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const entry = await URL.findOneAndUpdate(
    {
      id,
    },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  console.log(entry);
  return res.json("done");
};

module.exports = { getAllUrls, generateShortUrl, renderPageShortId };
