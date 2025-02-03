import {SetStateAction, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Please verify reCAPTCHA.");
            return;
        }

        if (formRef.current) {
            emailjs
                .sendForm(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
                    formRef.current,
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                )
                .then(
                    (result) => {
                        alert("Message sent successfully!");
                        formRef.current?.reset();
                        console.log(result);
                    },
                    (error) => {
                        alert(error);
                    }
                );
        }
    };

    return (
        <section className="contact">
            <div className="contact-container">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">
                    Have questions or want to book an appointment? We’d love to hear from you!
                </p>
                <div className="contact-content">
                    <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                        <input type="text" name="name" placeholder="Your Name" required className="contact-input"/>
                        <input type="email" name="email" placeholder="Your Email" required className="contact-input"/>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            className="contact-textarea"></textarea>
                        reCAPTCHA
                        <ReCAPTCHA
                            sitekey="your_site_key"
                            onChange={(token: SetStateAction<string | null>) => setCaptchaToken(token)}
                        />
                        <button type="submit" className="contact-button">Send Message</button>
                    </form>

                    <div className="contact-details">
                        <h3>Contact Information</h3>
                        <p><strong>Phone:</strong> +353 89 607 2065</p>
                        <p><strong>Email:</strong> leixlipdoggrooming@gmail.com</p>
                        <p><strong>Address:</strong> W23PY29</p>
                    </div>
                </div>

                <div className="contact-map">
                    <iframe
                        title="Dog Grooming Salon Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.526425808228!2d-6.464028184230879!3d53.37284347997856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48671d04ac7e9fcf%3A0x61e8f0f71b5f7f3b!2sConfey%2C%20Co.%20Kildare%2C%20W23%20PY29%2C%20Ireland!5e0!3m2!1sen!2sus!4v1677612846540!5m2!1sen!2us"
                        width="100%"
                        height="301"
                        style={{ border: "0" }}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;