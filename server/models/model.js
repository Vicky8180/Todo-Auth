
import mongoose from "mongoose";

const FisrtSchema=new mongoose.Schema({
    
    Name:{
        type: String,
        required:true
    },
    Number:{
        type:Number,
        required: true
    },
    BooleaN: {
        type:String,
        required:true,

    },
    Tag:{
        type:String ,
        required:true
    }

})

const FirstModel= new mongoose.model("crud", FisrtSchema);

export default FirstModel;