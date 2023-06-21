import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [task, setTask] = useState([
    {
        "id": 1,
        "text": "First Item",
        "day": 'Monday',
        "status": 0,
        "reminder": true
    },
    {
        "id": 2,
        "text": "Second Item",
        "day": 'Thursday',
        "status": 1,
        "reminder": false
    },
    {
      "id": 3,
      "text": "Third Item",
      "day": 'Friday',
      "status": 6,
      "reminder": true
  }
])

//Add task
const addTask = (t) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...t}
  setTask([...task, newTask])
}

//Delete task
const deleteTask = (id) => {
  setTask(task.filter((task)=> task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTask(task.map((tas) => tas.id === id ? {...tas, reminder: !tas.reminder}: tas))
}

  return (
    <div className="container">
      <Header />    
      <AddTask onAdd={addTask}/> 
      {task.length > 0 ? <Tasks task={task} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks available'}
    </div>
  );
}


export default App;
