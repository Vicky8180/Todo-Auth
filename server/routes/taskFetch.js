import express from 'express'
import taskModel from "../models/Task.js"
import moment from "moment"

const router = express.Router();

// import moment from "moments"


router.get('/fetch', async(req, res)=>{

    try {
        const data= await taskModel.find({})
        
        console.log((data[3].targetdate-data[3].created));
         return res.status(200).json({
            success:true,
            data:data,
            message:"Succesfully Fetched"
        })
     

    } catch (error) {
     
console.log(error)
 return res.status(201).json({
    success:false,
    error:error
})
        
    }
    

})
export default router;