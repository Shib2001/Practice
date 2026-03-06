import { useState } from "react";


const Runi = () =>{
    const [num, setNum] = useState(0);

    function increaseCount(){
        setNum(num+1);
    }

    function decreaseCount(){
        setNum(num-1);
    }

    return(
        <>
        <div style={{background:"wheat", color:"black", padding:"48px", margin:"48px", borderRadius:"12px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <h1 style={{fontSize:"48px"}}>{num}</h1>
        </div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"12px"}}>
        <button onClick={increaseCount} style={{background:"green", color:"white", padding:"12px", borderRadius:"12px", border:"none", cursor:"pointer"}}>Increase</button>
        <button onClick={decreaseCount} style={{background:"red", color:"white", padding:"12px", borderRadius:"12px", border:"none", cursor:"pointer"}}>Decrease</button>
        </div>
        </>
    )
}

export default Runi;