import {useState} from "react";
import "./Header.css";
import {FaFacebook, FaInstagram} from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <a href="/" className="header-logo">
                <picture>
                    <source srcSet="title.avif" type="image/avif"/>
                    <source srcSet="title.webp" type="image/webp"/>
                    <img fetchPriority="high" src="title.webp" height="300" width="300" alt="Logo"/>
                </picture>
            </a>
            <nav className="nav-links">
                <a href="/" className="nav-link">Home</a>
                <a href="/#services" className="nav-link">Services</a>
                {/*<Link to="/blog" className="nav-link">Blog</Link>*/}
                <a href="/#contact" className="cta" aria-label="Book an Appointment">Book Now</a>

            </nav>

            <button className="hamburger-menu" onClick={toggleMenu}>
                <span className="hamburger-icon">☰</span>
            </button>

            <div className={`sidebar-menu ${menuOpen ? "open" : ""}`}>
                <div className="sidebar-logo">
                    <img src="sidebar.webp"
                         height="300"
                         width="300"
                         alt="Logo"/>
                </div>

                <ul className="header-menu">
                    <li><a href="/#home" className="sidebar-link" onClick={closeMenu}>Home</a></li>
                    <li><a href="/#services" className="sidebar-link" onClick={closeMenu}>Services</a></li>
                    <li><a href="/#contact" className="sidebar-link" onClick={closeMenu}>Contact</a></li>
                    {/*<li><a href="/blog" className="sidebar-link" onClick={closeMenu}>Blog</a></li>*/}
                    <li><a href="/terms" className="sidebar-link" onClick={closeMenu}>Terms & Conditions</a></li>
                </ul>
                <div className="sidebar-social">
                    <h3>Follow Us</h3>
                    <a className="social-link"
                       href="https://www.facebook.com/people/Leixlip-Dog-Grooming/61572547896118/"
                       target="_blank"
                       rel="noreferrer"><FaFacebook/></a>
                    <a href="https://www.instagram.com/leixlipdoggrooming/"
                       className="social-link"
                       target="_blank"
                       rel="noreferrer"><FaInstagram/></a>
                </div>


            </div>

            {menuOpen && <div className="backdrop show" onClick={closeMenu}></div>}
        </header>
    );
};

export default Header;