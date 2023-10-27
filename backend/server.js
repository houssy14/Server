const express=require("express")
require("./config/mongs").connect()
const cors=require("cors")
const authrouters = require("./routers/authrouters")
const app=express()
app.use(express.json())
app.use(cors())
app.use(authrouters)






app.listen(8080,()=>{console.log("listening to port 8080")})