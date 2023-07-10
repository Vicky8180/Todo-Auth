import express from "express";
import user from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import setCookies from "../Authentication/setCookies.js"

const router = express.Router();
 dotenv.config();
router.post('/register', async (req, res)=>{

    // console.log(req.body)
   try {
    
const email= req.body.email;
console.log(email)

const data = await user.findOne({Email:email});
// console.log(data.Email)
if(data!=null){

    return res.json({data:data,
        success:true,
        message:"User already exits"})
}else{


   

  if(req.body.pass!=req.body.con){
    return res.status(200).json({data:data,
        success:true,
        message:"Password must be Same !"})
  } else {
    const tt=  await user.create({
        Name:req.body.name,
         Email:req.body.email,
         Pass:req.body.pass, 
         Con:req.body.con
    }) 
    setCookies(tt, res, "Registered and Token added !");

  }

    //  const token = jwt.sign({id:tt._id},process.env.SECRET_KEY);
    //   return res.status(200).cookie("token", token, {
    //     httpOnly:true,
    //     maxAge:1000*60
    //   }).json({tt});
    }

   } 
   catch (error) {
    console.log(error);
    res.status(201).json({
        success: false,
        messafe:"Not Registered !"
    })

   }


})

export default router;


