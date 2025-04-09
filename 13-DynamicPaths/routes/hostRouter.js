//external module
const express = require("express");

//local module
const { getAddHome, postAddHome, getHostHomes } = require("../controllers/hostController");

const hostRouter = express.Router();

hostRouter.get("/add-home", getAddHome);
hostRouter.post("/add-home", postAddHome);
hostRouter.get("/host-homes", getHostHomes);

exports.hostRouter = hostRouter;
