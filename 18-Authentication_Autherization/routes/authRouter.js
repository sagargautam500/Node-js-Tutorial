const express = require("express");
const { getLogin, postLogin, postLogOut, getSignUp, postSignUp } = require("../controllers/authController");

const authRouter=express.Router();

authRouter.get('/login',getLogin);
authRouter.post('/login',postLogin);
authRouter.post('/logout',postLogOut);
authRouter.get('/signup',getSignUp);
authRouter.post('/signup',postSignUp);

module.exports=authRouter;