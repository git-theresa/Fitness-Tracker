
const express = require("express");
const path = require("path");
//  router paths from html.js in Public Folder

// path to index page on browser
const router = express.Router();
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// path to exercise page on browser
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
// path to stats page on browser
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;