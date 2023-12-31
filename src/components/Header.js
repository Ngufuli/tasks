import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd, showAdd}) => {
   const location = useLocation()
    return(
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && <Button text={showAdd ? 'x Close':'+ Add'} color={showAdd ? 'red':'green'} onClick={onAdd}/>}
        </header>
    );
}

Header.defaultProps = {
    title: " Nicks"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}



export default Header;