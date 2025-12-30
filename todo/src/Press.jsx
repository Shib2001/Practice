import { useState } from "react";

const Press = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTasks] = useState("");
  const [done, setDone] = useState([]);

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTasks("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function updateTask(index) {
    const updatedText = prompt("Enter New task", tasks[index]);
    if (updatedText != null && updatedText.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedText;
      setTasks(updatedTasks);
    }
  }

  function doneTask(index) {
    if (done.includes(index)) {
      setDone(done.filter((i) => i !== index));
    } else {
      setDone([...done, index]);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-white mb-6">📝 My Todo List</h1>

      <div className="flex gap-2 mb-6">
        <input
          className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          placeholder="Add new task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      <ul className="w-full max-w-md space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-lg"
          >
            <span
              className={`text-white ${
                done.includes(index) ? "line-through text-gray-500" : ""
              }`}
            >
              {task}
            </span>
            <div className="flex gap-2">
              <button
                className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                className="px-3 py-1 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700"
                onClick={() => updateTask(index)}
              >
                Update
              </button>
              <button
                className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                onClick={() => doneTask(index)}
              >
                {done.includes(index) ? "Undo" : "Done"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Press;
