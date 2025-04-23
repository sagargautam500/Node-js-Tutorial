//external module
const express = require("express");
const { getHomes, getBooking, getIndex, getFavourite, getHomeDetails, postFavourite, postDeleteFavourite } = require("../controllers/storeController");

const storeRouter = express.Router();

storeRouter.get("/", getIndex);
storeRouter.get("/homes", getHomes);
storeRouter.get("/booking",getBooking);
storeRouter.get("/favourite",getFavourite);
storeRouter.post("/favourite",postFavourite);
storeRouter.get("/homes/:homeId", getHomeDetails); //homeID as treat key.thai is variable which consist different value
storeRouter.post("/favourite/delete/:homeId",postDeleteFavourite);


module.exports = storeRouter;
