import {FaTimes} from 'react-icons/fa';

const Task = ({tas, onDelete}) => {
    return(
        <div className="task">
            <h3>{tas.body}<FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(tas.id)}/></h3>
            <p>{tas.severity}</p>
            <p>{tas.status}</p>
        </div>
    )
}

export default Task