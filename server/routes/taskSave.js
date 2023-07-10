import express from "express";
import taskModel  from "../models/Task.js"
const router= express.Router();
import userModel from "../models/User.js";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
router.post("/save", async (req, res)=>{

 try {
    const { token } = req.cookies;
    
    if(token==""){
        return res.status(201).json({
             message:"Session Time out please Sign-in"
         })
      }
//   const decoded = jwt.verify(token, process.env.SECRET_KEY)
     const decoded = jwt.verify(token,process.env.SECRET_KEY)

  const userData= await userModel.findOne({_id:decoded.id})
  console.log(userData);

   
      const data= await taskModel.create({
                  
        title:req.body.title,
        discription:req.body.discription,
        useremail:userData.Email,
        userid:userData._id,
        targetdate:req.body.targetdate
      
      })
      res.status(200).json({
        success:true,
        data:data,
        message:"Task saved!"
      })

    
 } catch (error) {

    console.log(`issue in saving task ${error}`);
    res.status(201).json({

        success:false,
        message:"Task didn't got saved!",
        error

    })
    
 }


})


export default  router;
