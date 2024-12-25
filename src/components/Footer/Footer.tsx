import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo and Business Info */}
                <div className="footer-section footer-about">
                    <h3>Groomies</h3>
                    <p>Your trusted partner for premium grooming services to keep your furry friends happy and healthy.</p>
                    <p><FaPhone /> (123) 456-7890</p>
                    <p><FaEnvelope /> contact@doggroomingsalon.com</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#appointments">Book an Appointment</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-section footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Dog Grooming Salon. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;