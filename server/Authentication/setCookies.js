import dotenv from "dotenv";
import  jwt  from "jsonwebtoken";


dotenv.config();

const setCookies=(data, res,message )=>{
    const token = jwt.sign({id:data._id.toString()},process.env.SECRET_KEY);
    return res.status(200).cookie("token", token, {
      httpOnly:true,
      maxAge:1000*60*15
    }).json({data:data,
      success:true,
      message});
    

}

export default setCookies;
