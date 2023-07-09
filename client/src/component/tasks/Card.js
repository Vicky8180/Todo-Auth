import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import HowToRegRoundedIcon from '@mui/icons-material'
import  "./All.css"
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
// import Card from "./Card"
// import Box from '@mui/material/Box';
import axios from "axios";
import { useState, useEffect } from "react";


export default function CarD() {
  
    //  console.log(props)
    const progressValue=80;
    const [dataFetch, setData]  = useState();

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
// console.log(dataFetch);

    
 
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


  return (

<>   


    <div className='card_11'> 
    <div className='card_title'> <Typography>Title</Typography></div>
    <div className='card_discription'> <Typography>Discription</Typography></div>
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


    
    </div>
   

</>
  );
}
