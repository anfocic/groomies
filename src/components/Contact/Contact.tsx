import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">
                    Have questions or want to book an appointment? We’d love to hear from you!
                </p>
                <div className="contact-content">
                    {/* Contact Form */}
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required className="contact-input"/>
                        <input type="email" placeholder="Your Email" required className="contact-input"/>
                        <textarea
                            placeholder="Your Message"
                            required
                            className="contact-textarea"
                        ></textarea>
                        <button type="submit" className="contact-button">Send Message</button>
                    </form>

                    {/* Business Details */}
                    <div className="contact-details">
                        <h3>Contact Information</h3>
                        <p><strong>Phone:</strong> (123) 456-7890</p>
                        <p><strong>Email:</strong> contact@doggroomingsalon.com</p>
                        <p><strong>Address:</strong> W23PY29</p>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="contact-map">
                    <iframe
                        title="Dog Grooming Salon Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.526425808228!2d-6.464028184230879!3d53.37284347997856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48671d04ac7e9fcf%3A0x61e8f0f71b5f7f3b!2sConfey%2C%20Co.%20Kildare%2C%20W23%20PY29%2C%20Ireland!5e0!3m2!1sen!2sus!4v1677612846540!5m2!1sen!2sus"
                        width="100%"
                        height="301"
                        style={{border: '0'}}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;