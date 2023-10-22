const{Router}=require("express");
const { register,login } = require("../controllers/usercontrollers");
const authrout=Router();

authrout.get("./auth/login", login);
authrout.post("./auth/password",register);






module.exports=authrout;