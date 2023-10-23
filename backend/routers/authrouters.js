const {Router} = require('express');
const { login, register } = require('../controllers/usercontrollers');

const authrouters = Router();

authrouters.post("/auth/login",login)
authrouters.post("/auth/register",register)

module.exports=authrouters