//core module
const path = require("path");

//external module
const express = require("express");

//local module
const rootDir = require("../utils/pathUtils");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  // res.send(`
  //     <h1>Register Sucessfully</h1>
  //     <p>House name:<strong>${req.body.houseName}</strong></p>
  //     <a href="/host/add-home">Back</a>
  //     `);
  res.sendFile(path.join(rootDir, "views", "addedHome.html"));
  // res.sendFile(path.join(__dirname,'../','views','addedHome.html'));
});
module.exports = hostRouter;
