import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [task, setTask] = useState([])

useEffect(() => {
  const getTask = async () => {
    const taskFromServer = await fetchTask()
    setTask(taskFromServer)
  }
  getTask();
},[])  


// Get tasks from server

const fetchTask = async () => {
  const res = await fetch(`http://localhost:5000/task`);
  const data = res.json();

  return data
}

// To toggle boolean value to the server
const fetchTsk = async (id) => {
  const res = await fetch(`http://localhost:5000/task/${id}`);
  const data = res.json();

  return data
}

//Add task
const addTask = async (t) => {
  const res = await fetch(`http://localhost:5000/task`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(t)
  })

  const data = await res.json();

  setTask([...task, data])

  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = {id, ...t}
  // setTask([...task, newTask])
}

//Delete task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/task/${id}`,{
    method: 'DELETE'
  })

  setTask(task.filter((task)=> task.id !== id))
}

//Toggle reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTsk(id)
  const updTsk = {...taskToToggle, reminder:!taskToToggle.reminder}


  const res = await fetch(`http://localhost:5000/task/${id}`,{
    method: 'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(updTsk)
  })

  const data = await res.json()
  setTask(task.map((tas) => tas.id === id ? {...tas, reminder: data.reminder}: tas))
}

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>    
      {showAddTask && <AddTask onAdd={addTask}/> }
      {task.length > 0 ? <Tasks task={task} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks available'}
    </div>
  );
}


export default App;
