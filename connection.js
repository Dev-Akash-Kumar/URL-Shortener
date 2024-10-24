const mongoose = require("mongoose");

async function connectToMongoDB(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("error", error));
}

module.exports = { connectToMongoDB };
