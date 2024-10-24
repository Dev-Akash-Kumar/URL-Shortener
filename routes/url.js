const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetNewShortURL,
  handleAnalytics,
  handleSSR,
} = require("../controller/url");
const URL = require("../models/url");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get("/:shortId", handleGetNewShortURL);

router.get("/analytics/:shortId", handleAnalytics);
router.get("/test/getAllURLs", handleSSR);

module.exports = router;
