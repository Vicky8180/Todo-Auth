import React, { useEffect, useRef, useState } from 'react'
import { Box , Button, styled} from '@mui/material'
import CarD from './Card'
import Cardd from './Cardd'
import "./All.css"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CardForAdd from "./CardForAdd"

export default function Body() {

const ref2= useRef();

const data=["aa","bb","c","d"];
const [tt, setTt]= useState([]);

const  neww='ss'
const adding=()=>{
    // setTt(...tt,neww)
    const newData = [...tt, 'New Dat' ];
    console.log(tt)

    setTt(newData);
    ref2.current.log()
    console.log(tt)


}


const [showComponent,setShowcomponent] = useState(false);
const addingTask=()=>{
    setShowcomponent(true);



}


  return (<>

<div className='card_1'>
{/* <CarD/>
<CarD/>
<CarD/>
<CarD/>
<CarD/>
<CarD/>
<CarD/>
<CarD/>
<CarD/> */}







{tt.map((item)=>(
    <CarD  props={item}/>
))}
{/* 
<CarD/>
<CarD/>
<CarD/>
<CarD/>
<CarD/>
<CarD/>
<CarD/> */}


{/* <Fab color="primary" aria-label="add" 
   sx={{
            position:'fixed',
            bottom: (theme) => theme.spacing(8),
            right: (theme) => theme.spacing(4),
          }}
          onClick={()=>{ adding()}}
>
  <AddIcon />
</Fab> */}
<Fab color="primary" aria-label="add" 
   sx={{
            position:'fixed',
            bottom: (theme) => theme.spacing(18),
            right: (theme) => theme.spacing(4),
          }}
          onClick={()=>{  adding()}}
>
  <AddIcon />
</Fab>
 
 <CardForAdd  ref={ref2}/>


</div>


  </>
  )
}
