import react from 'react';
import { useState } from 'react';

const Practice=()=>{
    
    const [tasks,setTasks]=useState([]);
    const [newtasks, setNewTasks]=useState('');
    const [donelist,setDoneList]=useState([]);

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }
    
    function addTask(){

        if(newtasks.trim() !==''){
        setTasks([...tasks, newtasks]);
        setNewTasks('');
        }
    }




    function deleteTask(index){
        const updatedTasks=tasks.filter((_ , i )=>i !== index);
        setTasks(updatedTasks);
    }



    function updateTask(index){
        const updateText = prompt('Enter New Task',tasks[index]);
        if (updateText!==null && updateText.trim()!==''){
            const updatedTasks=[...tasks];
            updatedTasks[index]=updateText;
            setTasks(updatedTasks);
        }

    }
    

    function toggleDone(index){
        if(donelist.includes(index)){
            setDoneList(donelist.filter(i => i !== index))
        }else{
            setDoneList([...donelist,index])
        }
    }
    
    
    
    
    
    
    
    
    
    
    return(
        <>
        <div className='to-do-list'>
            <h1>Your Practice To do</h1>
            <div>
                <input type="text" placeholder="Enter Your Task" value={newtasks} onChange={handleInputChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text' style={donelist.includes(index) ? {textDecoration: 'line-through'} : {}}>
                        {task}
                    </span>
                    <button onClick={()=>deleteTask(index)}>Delete Task</button>
                    <button onClick={()=>updateTask(index)}>Update Task</button>
                    <button onClick={()=>toggleDone(index)}>
                         {donelist.includes(index) ? 'Unmark' : 'Mark as done'}
                    </button>
                </li>
                )}
            </ul>
        </div>    
        </>
    )
}

export default Practice;