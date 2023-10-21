const express=require("express")
require("./Config/mongs").connect()
const cors=require("cors")
const authrout = require("./router/authrout")
const app= express()
app.use(express.json())
app.use(cors())
app.use(authrout)






app.listen(8080,()=>{console.log("listening to port 8080")})