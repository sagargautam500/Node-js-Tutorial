//external module
const express = require("express");
const { getHomes, getBooking, getIndex, getFavourite } = require("../controllers/storeController");

const storeRouter = express.Router();

storeRouter.get("/", getIndex);
storeRouter.get("/homes", getHomes);
storeRouter.get("/booking",getBooking);
storeRouter.get("/favourite",getFavourite);


module.exports = storeRouter;
