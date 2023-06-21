import {FaTimes} from 'react-icons/fa';

const Task = ({tas, onDelete, onToggle}) => {
    return(
        <div className={`task ${tas.reminder? 'reminder': ''} `} onDoubleClick={() =>onToggle(tas.id)}>
            <h3>{tas.text}<FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(tas.id)}/></h3>
            <p>{tas.day}</p>
            <p>{tas.status}</p>
        </div>
    )
}

export default Task