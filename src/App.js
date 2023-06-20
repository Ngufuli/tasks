import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [task, setTask] = useState([
    {
        "id": 1,
        "body": "First Item",
        "severity": 1,
        "status": 0,
        "reminder": true
    },
    {
        "id": 2,
        "body": "Second Item",
        "severity": 2,
        "status": 1,
        "reminder": false
    },
    {
      "id": 3,
      "body": "Third Item",
      "severity": 5,
      "status": 6,
      "reminder": true
  }
])

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
      <AddTask/> 
      {task.length > 0 ? <Tasks task={task} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks available'}
    </div>
  );
}


export default App;
