const Task = ({tas}) => {
    return(
        <div className="task">
            <h3>{tas.body}</h3>
            <p>{tas.severity}</p>
            <p>{tas.status}</p>
        </div>
    )
}

export default Task