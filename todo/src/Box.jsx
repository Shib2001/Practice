import React from "react";
import { useState } from "react";

const Box = () => {
    const [boxColor1,setBoxColor1]=useState('#3cef90ff');
    const [boxColor2, setBoxColor2]=useState('#6151efff');
    const [boxColor3, setBoxColor3]=useState('#425060ff');
    const [boxColor4, setBoxColor4]=useState('#b61372ff');

    // function ChangeColor(color){
    //     setBoxColor(color);
    // }   


  return (
    <>
      <div style={{width:"100px",height:"100px",backgroundColor:boxColor1,margin:"10px"}}>
        <h1>Box1</h1>
      </div>
      <div style={{width:"100px",height:"100px",backgroundColor:boxColor2,margin:"10px"}}>
        <h1>Box2</h1>
      </div>
      <div style={{width:"100px",height:"100px",backgroundColor:boxColor3,margin:"10px"}}>
        <h1>Box3</h1>
      </div>
      <div style={{width:"100px",height:"100px",backgroundColor:boxColor4,margin:"10px"}}>
        <h1>Box4</h1>
      </div>
      <button onClick={()=>setBoxColor1("#720a0aff")}>Red</button>
      <button onClick={()=>setBoxColor2("#720a0aff")}>Blue</button>
      <button onClick={()=>setBoxColor3("#720a0aff")}>Green</button>
      <button onClick={()=>setBoxColor4("#720a0aff")}>Yellow</button>
    </>
  );
};

export default Box;
