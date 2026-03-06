import { useState } from "react";


const New=()=>{

    const [tasks,setTasks]=useState([]);

    function increaseCount(){
        setTasks(tasks+1);
    }

    function decreaseCount(){
        setTasks(tasks-1);
    }

    return(
        <div>
            {}
        </div>
    )

}


export default New;