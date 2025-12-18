import react from 'react'
import { useState } from 'react';

const Todos = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [doneList, setDoneList] = useState([]); 

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ''){
            setTasks([...tasks, newTask]);
            setNewTask('');
        }

    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    // Update task - prompts user for new text and replaces old task
    function updateTask(index){
        const updatedText = prompt("Enter new task:", tasks[index]);
        if(updatedText !== null && updatedText.trim() !== ''){
            const updatedTasks = [...tasks];
            updatedTasks[index] = updatedText;
            setTasks(updatedTasks);
        }
    }

    // Toggle done status for a task
    function toggleDone(index){
        if(doneList.includes(index)){
            setDoneList(doneList.filter(i => i !== index)); // remove from done
        } else {
            setDoneList([...doneList, index]); // add to done
        }
    }

 
    return (
    <>
    <div className='to-do-list'>
        <h1>To-Do-List</h1>
    <div>
        <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>Add button</button>
    </div>
    <ol>
        {tasks.map((task, index)=>
            <li key={index}>
                <span className='text' style={doneList.includes(index) ? {textDecoration: 'line-through'} : {}}>
                    {task}
                </span>
                <button className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>
                <button className='update-button' onClick={()=>updateTask(index)}>Update Task</button>
                <button className='mark-button' onClick={()=>toggleDone(index)}>
                    {doneList.includes(index) ? 'Unmark' : 'Mark as done'}
                </button>
            </li>
        )} 
    </ol>
    </div>
    </>
    
)
}

export default Todos