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

const Register = forwardRef((props, ref) => {

const navigate=useNavigate();
    // from here till next 6 7 line . we are calling child's function from parent component
    const [open, setOpen] = React.useState(false);
    useImperativeHandle(ref, () => ({
      log() {  
    setOpen(true);
      }
    } ));
    ////end////
const [name, setName]= React.useState("");
const [email, setEmail]= React.useState("");
const [pass, setPass]= React.useState("");
const [con, setCon]= React.useState("");


     const Register=async()=>{
        const newPost={
            name:name,
             email:email,
             pass:pass,
             con:con} 
             const config = {
                headers: {
                  "Content-Type": "application/json"
                  },
                  withCredentials: true
                }
        
         try {
          const data=   await Axios.post('http://localhost:8000/user/register',newPost, config)
           console.log(data.data.message)
           
          setOpen(false);
          alert(data.data.message)
          navigate("/home")

         } catch (error) {
            console.log("didnot registeed") 

         }

     }




    const handleClose = () => {
        setOpen(false);
      };
    return  <div>
   
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <div className='temp'>
      <DialogContent>
        <div className='vicky'>
        <form className='vicky1'>
          <input  className="in" type="text"  placeholder='Name*' value={name} onChange={(e) => setName(e.target.value)} />
          <input className="in" type="text"  placeholder='Email*' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="in" type="text"  placeholder='Password*' value={pass} onChange={(e) => setPass(e.target.value)} />

          <input className="in" type="text"  placeholder='Confirm Password*' value={con} onChange={(e) => setCon(e.target.value)}  />
        </form>
        </div>
      </DialogContent>
      </div>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={Register}>Register</Button>
      </DialogActions>
    </Dialog>
  </div>;
  });


export default Register;

