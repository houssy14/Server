const mongoose=require("mongoose")

const userschema= new mongoose.Schema({
  username: { type:String, require:true},
  email: { type:String,require:true,unique:true},
  password:{ type:String,require:true},
  register: { type: String } // Add the 'register' field

})

module.exports=mongoose.model("users", userschema)