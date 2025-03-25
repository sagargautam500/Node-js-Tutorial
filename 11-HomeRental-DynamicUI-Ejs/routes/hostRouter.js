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
  res.render('addHome',{pageTitle:'addHome',currentPage:'addHome'})
});

const registerHome=[];

hostRouter.post("/add-home", (req, res, next) => {
  // const houseName=req.body.houseName;
  // registerHome.push({houseName:houseName,})
  registerHome.push(req.body) //push js object 

  res.render('addedHome',{registerHome:req.body,pageTitle:'Result',currentPage:'addHome'})   //send ejs file
  // res.sendFile(path.join(rootDir, "views", "addedHome.html")); //send html file
});
exports.hostRouter = hostRouter;
exports.registerHome=registerHome;
