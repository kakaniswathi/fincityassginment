import "./index.css"
const Header = () => (
    <nav className="navbar-container">
        <div>
            <h1 className="navbar-heading">Madelyn Torff</h1>
        </div>
        <ul className="header-option-container">
            <a href="#aboutSection" className="link-style">
                <li className="header-option">About</li>
            </a>
            <a href="#addProjectSection" className="link-style"><li className="header-option">Projects</li>
            </a>
            <a href="#contactSection" className="link-style"><li className="header-option">Contacts</li>
            </a>    
        </ul>
    </nav>
)

export default Header