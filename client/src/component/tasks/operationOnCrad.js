import React, { useState , forwardRef, useImperativeHandle} from 'react'
import { Slide, TextField } from '@mui/material';
import "./All.css"
import { Dialog } from '@mui/material'
import styled from '@emotion/styled';
import {Button} from '@mui/material';
// import makeStyles from '@mui/material';
// import dialogClasses from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const OperationOnCrad=forwardRef((props, ref)=> {

  const [openOperation, setOpenOperation]= useState(false);
  useImperativeHandle(ref, () => ({
    log() {  
      setOpenOperation(true);
    }
  } ));
  function handleClose(){
    setOpenOperation(false);
  }




  return (
    <Dialog  

    sx={{
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "800px",  // Set your width here
        },
      },
    }
    }
    className='dialog_operation'
            open={openOperation}
            TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      
    >
 <div className='operation_card'>
    <div >
    <input className='title_input' placeholder='Title'/>
    </div>
<div >
<input className='discription_input' placeholder='discription'/>
</div>

<div className='buttons_operation'>
    <Button variant='Text' color='success' onClick={handleClose}>Close</Button>
    <Button  variant='contained' color='success' onClick={handleClose}>Update</Button>
    <Button  variant='contained' color='error' onClick={handleClose}>Delete</Button>
    </div>
   
    </div>
    
    
    </Dialog>
   
  )
}
)
export default OperationOnCrad;