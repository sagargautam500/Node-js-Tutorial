//core module:
const path=require('path');

//local module
const rootDir=require('../utils/pathUtils');

//external module
const express = require("express");

const userRouter=express.Router();


userRouter.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname,'../','views','home.html'));
  res.sendFile(path.join(rootDir,'views','home.html'));
});

module.exports=userRouter;