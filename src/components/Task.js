import {FaTimes} from 'react-icons/fa';

const Task = ({tas, onDelete, onToggle}) => {
    return(
        <div className={`task ${tas.reminder? 'reminder': ''} `} onDoubleClick={() =>onToggle(tas.id)}>
            <h3>{tas.body}<FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(tas.id)}/></h3>
            <p>{tas.severity}</p>
            <p>{tas.status}</p>
        </div>
    )
}

export default Task