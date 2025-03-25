//core module
const path = require("path");

//external module
const express = require("express");

//local module
const rootDir = require("../utils/pathUtils");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
  // res.sendFile(path.join(rootDir, "views", "addHome.html"));
  res.render('addHome',{pageTitle:'addHome'})
});

const registerHome=[];

hostRouter.post("/add-home", (req, res, next) => {
  const houseName=req.body.houseName;
  registerHome.push({houseName:houseName,})
  res.render('addedHome',{houseName,pageTitle:'Result'})   //send ejs file
  // res.sendFile(path.join(rootDir, "views", "addedHome.html")); //send html file
});
exports.hostRouter = hostRouter;
exports.registerHome=registerHome;
