//external module
const express = require("express");

//local module
const { getAddHome, postAddHome, getHostHomes, getEditHome, postEditHome, postDeleteHome } = require("../controllers/hostController");

const hostRouter = express.Router();

hostRouter.get("/add-home", getAddHome);
hostRouter.post("/add-home", postAddHome);
hostRouter.get("/host-homes", getHostHomes);
hostRouter.get("/editHome/:homeId", getEditHome);
hostRouter.post("/editHome", postEditHome);
hostRouter.post("/deleteHome/:homeId", postDeleteHome);

exports.hostRouter = hostRouter;
