import mongoose  from "mongoose";

const userSchema= new mongoose.Schema({

Name:{
    type:String,
   required: true,

},
Email:{
    type:String,
    required:true,
    // unique:true,
},
Pass:{
    type:String,
    required:true,
},
Con:{
    type:String,
    required:true,
}


})

const userModel= new mongoose.model("user", userSchema);

export default userModel;
