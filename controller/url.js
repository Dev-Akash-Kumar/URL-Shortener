const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortId = shortid(8);
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortId });
}

async function handleGetNewShortURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectUrl);
}

async function handleAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analyticss: result.visitHistory,
  });
}

async function handleSSR(req, res) {
  const allURLs = await URL.find({});
  return res.render("home", {
    urls: allURLs,
  });
  /*
  return res.end(`
    <html>
     <head></head>
    <body>
     <ol>
      ${allURLs
        .map(
          (url) =>
            `<li>${url.shortId} - ${url.redirectUrl} - ${url.visitHistory.length}</li>`
        )
        .join("")}
     </ol>
    </body>
    </html>`);
    */
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetNewShortURL,
  handleAnalytics,
  handleSSR,
};
