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

  return (
    <div className="container">
      <Header />     
      <Tasks task={task}/> 
    </div>
  );
}


export default App;
