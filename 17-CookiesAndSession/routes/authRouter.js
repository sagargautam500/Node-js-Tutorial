const express = require("express");
const { getLogin, postLogin, postLogout } = require("../controllers/authController");

const authRouter=express.Router();

authRouter.get('/login',getLogin);
authRouter.post('/login',postLogin);
authRouter.post('/logout',postLogout);

module.exports=authRouter;