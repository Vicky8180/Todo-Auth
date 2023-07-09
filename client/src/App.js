import "./App.css"
import FP from './FirstPage';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Display from './component/tasks/Display';

function App() {
  return (
    <div>
    <BrowserRouter>
    {/* <FP/> */}

<Routes>

  <Route  path="/" element={ <FP/>}/>
  <Route path ="/home" element ={<Display/> }/>

</Routes>

    </BrowserRouter>
    
      
    </div>
  );
}

export default App;
