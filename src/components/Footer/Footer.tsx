import '../../App.css';

import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo and Business Info */}
                <div className="footer-section footer-about">
                    <h3>Groomies</h3>
                    <p>Your trusted partner for premium grooming services to keep your furry friends happy and healthy.</p>
                    <p><FaPhone /> +353 89 607 2065</p>
                    <p><FaEnvelope /> leixlipdoggrooming@gmail.com</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/#services">Our Services</a></li>
                        <li><a href="/#about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <Link to="/terms" className="link">Terms & Conditions</Link>
                        <li><a href="#appointments">Book an Appointment</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-section footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/people/Leixlip-Dog-Grooming/61572547896118/" target="_blank" rel="noreferrer"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Leixlip Dog Grooming. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
