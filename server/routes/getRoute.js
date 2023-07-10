import express  from "express";
const router= express.Router();


import model from "../models/model.js";
// import router from "./FirstRoute";


router.get('/getdata', async (req, res)=>{

    try {
        const ans=await model.find({})
        console.log(ans);
        return res.json({ans});


    } catch (error) {
        console.log("error in getting data");
        res.json(error);
    }
})

export default router;