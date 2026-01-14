import { useState } from "react";

const Niggesh = () =>{
    const [coun, setCoun] = useState(0);

      function increase(){
        setCoun(coun+1);
      }

        function decrease(){
        setCoun(coun-1);
      }


    return(
    <>
    <h1>{coun}</h1>
    <button onClick={increase}>Click to increase Count</button>
    <button onClick={decrease}>Click to decrease Count</button>
    </>
)
}

export default Niggesh;