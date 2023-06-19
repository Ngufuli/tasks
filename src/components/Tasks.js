import Task from "./Task";

const Tasks = ({task, onDelete}) => {

    return(
        <>
        {task.map((tas) => (<Task key={tas.id} tas={tas} onDelete={onDelete}/>))}
        </>
    )
}

export default Tasks;