const express = require("express");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const handleContactUs = express.Router();

handleContactUs.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

handleContactUs.post("/contact-us", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contactDisplay.html"));
});

module.exports = handleContactUs;
