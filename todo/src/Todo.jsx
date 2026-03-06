import { useState } from "react";

const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [doneList, setDoneList] = useState([]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  // Update task - prompts user for new text and replaces old task
  function updateTask(index) {
    const updatedText = prompt("Enter new task:", tasks[index]);
    if (updatedText !== null && updatedText.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedText;
      setTasks(updatedTasks);
    }
  }

  // Toggle done status for a task
  function toggleDone(index) {
    if (doneList.includes(index)) {
      setDoneList(doneList.filter((i) => i !== index)); // remove from done
    } else {
      setDoneList([...doneList, index]); // add to done
    }
  }

  return (
    <>
      <div
        className="to-do-list"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ color: "black", marginBottom: "20px" }}>To-Do-List</h1>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
            style={{
              padding: "10px 15px",
              fontSize: "16px",
              border: "2px solid #4a90d9",
              borderRadius: "5px",
              marginRight: "10px",
              width: "250px",
            }}
          />
          <button
            className="add-button"
            onClick={addTask}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
        <ol style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#fff",
                padding: "15px 20px",
                marginBottom: "10px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <span
                className="text"
                style={{
                  flex: 1,
                  fontSize: "16px",
                  ...(doneList.includes(index)
                    ? { textDecoration: "line-through", color: "#888" }
                    : {}),
                }}
              >
                {task}
              </span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#f44336",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
              <button
                className="update-button"
                onClick={() => updateTask(index)}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#2196F3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Update
              </button>
              <button
                className="mark-button"
                onClick={() => toggleDone(index)}
                style={{
                  padding: "8px 12px",
                  backgroundColor: doneList.includes(index)
                    ? "#ff9800"
                    : "#9C27B0",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {doneList.includes(index) ? "Unmark" : "Done"}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Todos;
