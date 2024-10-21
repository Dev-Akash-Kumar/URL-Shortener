const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetNewShortURL,
  handleAnalytics,
} = require("../controller/url");
const URL = require("../models/url");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get("/:shortId", handleGetNewShortURL);

router.get("/analytics/:shortId", handleAnalytics);
module.exports = router;
