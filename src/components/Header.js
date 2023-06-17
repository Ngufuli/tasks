
const Header = ({title}) => {
    return(
        <header>
            <h1>Hello {title}</h1>
        </header>
    );
}

Header.defaultProps = {
    title: ' | Nicks'
}

export default Header;