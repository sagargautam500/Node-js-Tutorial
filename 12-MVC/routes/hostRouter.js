//external module
const express = require("express");

//local module
const { getAddHome, postAddHome } = require("../controllers/homes");

const hostRouter = express.Router();

hostRouter.get("/add-home", getAddHome);

hostRouter.post("/add-home", postAddHome);

exports.hostRouter = hostRouter;
