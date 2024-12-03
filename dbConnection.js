const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Mongoose Error", err);
  }
};

module.exports = connection;
