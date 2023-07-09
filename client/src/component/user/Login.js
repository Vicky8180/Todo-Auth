
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef, useImperativeHandle } from 'react';
import  "./here.css"
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



    const Login = forwardRef((props, ref) => {

      const navigate= useNavigate();


        // from here till next 6 7 line . we are calling child's function from parent component
        const [open, setOpen] = React.useState(false);
        useImperativeHandle(ref, () => ({
          log() {  
        setOpen(true);
          }
        } ));
        ////end////
    
    const [email, setEmail]= React.useState("");
    const [pass, setPass]= React.useState("");

    
    
         const Login=async()=>{
            const newPost={
    
                 email:email,
                 pass:pass,
    } 
                 const config = {
                    headers: {
                      "Content-Type": "application/json"
                      },
                      withCredentials: true
                    }
            
             try {
              const data=   await Axios.post('http://localhost:8000/user/login',newPost, config)
              //  console.log(data.data.success)
               
              setOpen(false);
              alert(data.data.message)
              if(data.data.success){
                navigate("/home")
              }
    
             } catch (error) {
                console.log("didnot registeed") 
    
             }
    
         }
    
    
    
    
        const handleClose2 = () => {
            setOpen(false);
          };
    return <div>
   
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose2}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <div className='temp'>
      <DialogContent>
        <div className='vicky'>
        <form className='vicky1'>
        
          <input className="in" type="text"  placeholder='Email*' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="in" type="text"  placeholder='Password*' value={pass} onChange={(e) => setPass(e.target.value)} />

        
        </form>
        </div>
      </DialogContent>
      </div>
      <DialogActions>
        <Button onClick={handleClose2}>Disagree</Button>
        <Button onClick={Login}>Login</Button>
      </DialogActions>
    </Dialog>
  </div>;
})
export  default Login;