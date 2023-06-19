import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [task, setTask] = useState([
    {
        "id": 1,
        "body": "First Item",
        "severity": 1,
        "status": 0
    },
    {
        "id": 2,
        "body": "Second Item",
        "severity": 2,
        "status": 1
    }
])

const deleteTask = (id) => {
  setTask(task.filter((task)=> task.id !== id))
}

  return (
    <div className="container">
      <Header />     
      {task.length > 0 ? <Tasks task={task} onDelete={deleteTask}/> : 'No tasks available'}
    </div>
  );
}


export default App;
