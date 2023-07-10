import express from "express"
import user from "../models/User.js"
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv"
import Auth from "../Authentication/Auth.js";
const router= express.Router();



dotenv.config();

router.get("/loginbytoken", Auth ,async(req, res)=>{
// try {
    
//    const { token } = req.cookies;

//    console.log(token);
// if(token==""){
//    return res.status(201).json({
//         message:"Session Time out"
//     })
//  }

//    const decoded= jwt.verify(token,"qazwsxedcrfvtgbbgtvfrcdexswzaq"
// //    ,(err, decoded) => {
// //     if(err) {
// //          return res.status(400).json({err})
// //     }
// //     next()     }
//     )
//    console.log(decoded);
//    const data=await user.findById({_id:decoded.id})
//    return res.status(200).json({data});
// } catch (error) {
//     res.json({
//         success:false,
//         message:"dont  know"
//     })
// }


res.status(200).json({
    success:true,
    message:"User got authenticated"
})



})


export default router;
