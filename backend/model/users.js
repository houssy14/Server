const mongoose=require("mongoose")

const usersschema= new mongoose.Schema({
  username: { type:String, require:true},
  email: { type:String,require:true,unique:true},
  password:{ type:String,require:true},


})

module.exports=mongoose.model("users", usersschema)