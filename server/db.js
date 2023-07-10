import mongoose from "mongoose";
import dotenv from "dotenv"



//This is used to hide password and id in  database url . "npm i dotenv"
dotenv.config();

const MongoUser= process.env.DB_username;
const MongoPass= process.env.DB_userpass;
const connection = async ()=>{

    const DatabaseURL=`mongodb+srv://${MongoUser}:${MongoPass}@crudcluster.ev6l3ov.mongodb.net/`;

   try {
    await mongoose.connect(DatabaseURL,{useUnifiedTopology:true});
    
    console.log("Database is connected  ! ")
   } catch (error) {
        console.log(`MongoDb is not connected ${error.message}`)    
   }
}
export default connection;