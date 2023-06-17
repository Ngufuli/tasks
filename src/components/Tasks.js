import Task from "./Task";

const Tasks = ({task}) => {

    return(
        <>
        {task.map((tas) => (<Task key={tas.id} tas={tas}/>))}
        </>
    )
}

export default Tasks;