import express from "express";
import user from "../models/User.js"
import setCookies from "../Authentication/setCookies.js";
const router = express.Router();




router.post("/login", async(req, res)=>{
    
    try {

const {email, pass}= req.body;


        const emailExist = await user.findOne({Email:email});
        // const passExist = await user.find({});

  if(!emailExist.Email ){
   return  res.status(201).json({
        succes:false,
        message:"Invalid email "
    })
  }

  if(pass!=emailExist.Pass){
     return res.status(201).json({
        succes:false,
        message:"Invalid email or password"
    })
  }

        //  return res.status(200).json({data}); instead of this we are doing below line
        setCookies(emailExist, res,`You are logged-in and token added`)


    } catch (error) {
        res.status(201).json({succes:false})
    }
})
export default router;