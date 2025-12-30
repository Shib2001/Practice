import React from "react";
import { useState } from "react";


const Another = () => {

    const [tasks, setTasks] = useState([]);
    const [newtasks, setNewTasks] = useState('');
    const [done, setDone] = useState([]);

    function handleInputChange(event){
        setTasks(event.target.value);
    }


    function addTask(){
        if(newtasks.trim() !== ''){
            setTasks([...tasks, newtasks])
            setNewTasks('');
        }
    }


    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !==index);
        setTasks(updatedTasks);
    }


    function updateTask(index){
        const updatedText = prompt("Enter new name:", tasks[index])
        if (updatedText !== null && updatedText.trim() !== ''){
            const updatedTasks = [...tasks];
            updatedTasks[index]=updatedText;
            setTasks(updatedTasks);
        }
    }


    function Toggle(index){

    }






    return (
        <>
        <div>
            <h1>To do list </h1>
            <input placeholder="Enter a New Todo" value={newtasks} onChange={handleInputChange} type="text"></input>
            <button  onClick={addTask}>Add Task</button>
        
        <ul>
            {tasks.map((task,index)=>
            <li key={index}>
                <span>
                    {task}
                </span>
                <button onClick={()=>updateTask(index)}> Update Task </button>
                <button onClick={()=>deleteTask(index)}> Delete Task </button>

            </li>
        )}
        </ul>
        </div>
        </>
    )
}


export default Another ();
