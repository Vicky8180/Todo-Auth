
import  express  from "express";
// backend me require ke jgh pe import use krna hai aggr to 
// package.json file me "main": ke nice ( "type":"module" ) ise past krna hoga 
import bodyParser from "body-parser";
import connection from "./db.js";
import cors from "cors"
import cookieParser from "cookie-parser";


//////////////////////////////////////////////////////////////////////////
import postRoutes from "./routes/postRoute.js"
import getRoutes from "./routes/getRoute.js"
import userRegister from "./routes/userRegister.js"
import userLogin from "./routes/userLogin.js"
import userLoginCookies from "./routes/userLoginCookies.js"
import taskSave from "./routes/taskSave.js"
import taskFetch from "./routes/taskFetch.js"


const port =8000;
const app = express();


//middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());


//database connection
connection();

//routing
app.use('/api', postRoutes);
app.use('/api', getRoutes);
app.use('/user', userRegister);
app.use('/user', userLogin);
app.use('/user', userLoginCookies);
app.use('/task', taskSave);
app.use('/task', taskFetch);



app.listen(port,()=>{ 
    console.log(`running on port number ${port}`)
})