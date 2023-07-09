import axios from "axios"
import useState from "react"

const TaskAdd=()=>{


const [data, setData] = useState("");

const Adding=async()=>{


    try {
        const temp= await axios.get("link")
        setData(temp);

    } catch (error) {
        console.log("error in fectching task");
    }


}

}
export default TaskAdd;