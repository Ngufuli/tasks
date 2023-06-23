import Task from "./Task";

const Tasks = ({task, onDelete, onToggle, index}) => {

    return(
        <>
        {task.map((tas) => (<Task key={tas.id} tas={tas} onDelete={onDelete} onToggle={onToggle} />))}
        </>
    )
}

export default Tasks;