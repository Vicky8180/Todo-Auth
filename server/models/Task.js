import mongoose  from "mongoose";
import moment from "moment"

const taskSchema = new mongoose.Schema({

    title:{
        type:String,
        required: true,

    },
    discription:{
        type:String,
        required:true,

    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    useremail:{
        type:String,
        ref:"user",
        required:true
    }
    , created: {
        type: Date,
        default: Date.now("YYYY-MM-DDTHH:MM:SSZ"),
        // default:moment().format(),,
        // default:moment().format('MMMM Do YYYY, h:mm:ss a'),
        required:true
        
        // default:moment.utc(moment().format()).local().format('YYYY-MM-DD HH:mm:ss')

      }


, targetdate:{
    type:Date,
    // default:moment().format('MMMM Do YYYY, h:mm:ss a'),
    required: true
}
})

const taskModel= new mongoose.model("task", taskSchema);

export default taskModel;