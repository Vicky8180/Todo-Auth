import * as React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import  "./All.css"
import LinearProgress from '@mui/material/LinearProgress';
// import Card from "./Card"
// import Box from '@mui/material/Box';
import axios from "axios";
import { useState, useEffect } from "react";
import OperationOnCrad from './operationOnCrad';
import { useRef } from 'react';


export default function CarD() {

    const progressValue=80;
    const [dataFetch, setData]  = useState();
    const refOperation = useRef();

const[isOpen , setOpen]= useState(false);

useEffect(()=>{
  const dataFetch=async()=>{
    try {
      const data=  await axios("http://localhost:8000/task/fetch")
      setData(data);
      
    } catch (error) {
    console.log("error in fetchig task data")    
    }
  }
  dataFetch();

},[])


    
 
    const [progress, setProgress] = useState(60);
    useEffect(() => {
      const timer = setInterval(() => {
        console.log(progress)

        setProgress((prevProgress) => (prevProgress >= 60 ? 0 : prevProgress +1));
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, []);

    const handle=()=>{
       setOpen(true);
       setTimeout(() => {
        refOperation.current.log();
      }, 0);
    }


  return (

<>   

{/* <operationOnCrad/> */}
    <button className='card_11'  onClick={handle}> 
    <div className='card_title'> <Typography>Title</Typography></div>
    <div className='card_discription'  
             
    
    > <Typography  >Discription Discription Dis Dion Discri D Discriptn Dison Discription Discription Discription 
    Discription Discription Discription Discription Discription Discription 
    Discription Discription Discription Discription Discription 
    
    </Typography></div>
    <div className='card_progress'> 
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          progress,
        )}%`}</Typography>
      </Box>
    </Box>
    
    </div>


    
    </button>
   {isOpen && <OperationOnCrad ref={refOperation}/>}   
  
</>
  );
}
