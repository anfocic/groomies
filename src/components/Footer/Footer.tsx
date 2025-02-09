import '../../App.css';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <li><Link to="/terms" className="link">Terms & Conditions</Link></li>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Leixlip Dog Grooming. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
