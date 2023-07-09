import { useRef } from "react";
import Register from "./component/user/Register";
import Login from "./component/user/Login";
import { Button } from "@mui/material";
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
const FP=()=>{



    const ref = useRef();
    const reff = useRef();




    return <>

        <div className="fp_main">
<div className="fb_main2">
<div className="one">
<Register  ref={ref}/>



<Button variant="contained" color ="success" 
 endIcon={<HowToRegRoundedIcon/>}onClick={() => ref.current.log()}>Register</Button>
</div>
<div className="one">
<Login ref={reff}/>
<Button variant="contained" color ="success"  
 endIcon={<LoginRoundedIcon/>} onClick={() => reff.current.log()}> L o g i   n   </Button>
</div>

</div>
     </div>
    </>
}
export default FP;