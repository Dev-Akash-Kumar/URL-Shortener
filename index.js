const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connection");
const { connect } = require("mongoose");
const path = require("path");
const app = express();
const port = 8000;

connectToMongoDB("mongodb://localhost:27017/short-url");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use("/api/url", urlRoute);

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
