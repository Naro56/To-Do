import { useState } from "react";

export default function Component() {
  const [tasks, setTasks] = useState([
    { text: "Buy groceries", done: false },
    { text: "Call a friend", done: false },
    { text: "Read a book", done: true },
    { text: "Pay bills", done: true },
    { text: "Clean the room", done: false },
    { text: "8K Steps ", done: false },
  ]);


  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (!newTask.trim()) return;
    setTasks((t) => [...t, { text: newTask, done: false }]);
    setNewTask("");
  }

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function deleteTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

 function handleTaskDone(index) {
   setTasks((prev) => {
   
     const updated = prev.map((t, i) =>
       i === index ? { ...t, done: !t.done } : t
     );

     
     return updated.slice().sort((a, b) => Number(a.done) - Number(b.done));
   });
 }

  return (
    <div className="main-container">
      <h2>To-Do List</h2>
      <div>
        <input
          type="text"
          onChange={handleInputChange}
          value={newTask}
          placeholder="Write down"
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              className="text"
              style={{ textDecoration: task.done ? "line-through" : "none" }}
            >
              {task.text}
            </span>

            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button
              className="done-button"
              onClick={() => handleTaskDone(index)}
            >
              {task.done ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
