import '../../App.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <a href="/" className="header-logo">
                    <img src="img_4.png" alt="Logo"/>
                </a>
                <nav className="header-nav">
                <ul className="header-menu">
                        <li><a href="#about" className="header-link">About</a></li>
                        <li><a href="#contact" className="header-link">Contact</a></li>
                        <li><a href="#book" className="header-button">Book Now</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;