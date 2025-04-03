//external module
const express = require("express");

//local module
const { getAddHoome, postAddHome } = require("../controllers/homes");

const hostRouter = express.Router();

hostRouter.get("/add-home", getAddHoome);

hostRouter.post("/add-home", postAddHome);

exports.hostRouter = hostRouter;
