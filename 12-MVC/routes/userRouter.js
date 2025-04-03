//external module
const express = require("express");
const { getHomes } = require("../controllers/homes");

const userRouter = express.Router();

userRouter.get("/", getHomes);

module.exports = userRouter;
