import  express  from "express";

const router= express.Router();
import model  from "../models/model.js";



router.post("/add", async(req, res)=>{


    try {
        
       const tt= await model.create({
            Name:req.body.name,
            Number:req.body.num,
            BooleaN:req.body.bol,
            Tag:req.body.tag
        }).then(add=>(res.json(add)))

    } catch (error) {
        console.log(error)
    res.json({success:false})
        
    }
})

// module.exports= router;
export default router;