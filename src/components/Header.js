import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
      }
    return(
        <header className="header">
            <h1>{title}</h1>
            <Button text='Add' color='#4CC417' onClick={onClick}/>
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