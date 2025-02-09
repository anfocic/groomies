import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <a href="/" className="header-logo">
                    <img src="title.webp" alt="Logo"/>
                </a>
                {/*<nav className="header-nav">*/}
                {/*<ul className="header-menu">*/}
                {/*    <li><a href="#contact" className="header-button">Book Now</a></li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}
            </div>
        </header>
    );
};

export default Header;