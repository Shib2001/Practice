import {useState} from 'react'



const Container = () => {
    const [box1Color, setBox1Color] = useState('#3498db');
    const [count, setCount] = useState(0)

    let handlecountincrease = () =>{
        setCount(count+1);
        
    }

    let handlecountdecrease=()=>{
        setCount(count-1);
    }

    // Container wrapper style
    const wrapperStyle = {
        display: 'flex',
        gap: '20px',
        padding: '20px',
        justifyContent: 'center'
    };

    // Common box style
    const boxStyle = {
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'white',
        border: '3px solid rgba(0, 0, 0, 0.2)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
    };

    return (
        <>
        <div style={wrapperStyle}>
            <div style={{ ...boxStyle, backgroundColor: box1Color }}>Box 1</div>
            <div style={{ ...boxStyle, backgroundColor: '#e74c3c' }}>Box 2</div>
            <div style={{ ...boxStyle, backgroundColor: '#2ecc71' }}>Box 3</div>
        </div>
        <button onClick={()=>setBox1Color('#000000')}>Click to change the color of  Box 1 </button>
        <div>
            <h1>{count}</h1>
            <button onClick={()=>handlecountincrease}>Click to increase</button>
            <button onClick={()=>handlecountdecrease}>Click to Decrease</button>
        </div>
        </>
        
    )
}

export default Container;