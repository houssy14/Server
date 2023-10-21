const{Router}=require("express");
const { register,login } = require("../controllers/usercontrollers");
const authrout=Router();

authrout.post("/auth/login", login);
authrout.post("/auth/register",register);






module.exports=authrout;