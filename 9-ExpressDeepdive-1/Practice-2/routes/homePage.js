//external module:
const express = require("express");

//core module
const path=require('path')

//local module
const rootDir=require('../utils/pathUtil')

const handleHome=express.Router();

handleHome.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname,'../','views','home.html'));
  res.sendFile(path.join(rootDir,'views','home.html'));
});

module.exports=handleHome;