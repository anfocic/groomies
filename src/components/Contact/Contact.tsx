import {useState} from "react";
import {useForm} from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import '../../App.css';
import {FaFacebook, FaInstagram} from "react-icons/fa";

const Contact = () => {
    const {register, reset, handleSubmit} = useForm();
    const [result, setResult] = useState<string | null>(null);

    const accessKey = import.meta.env.VITE_WEB3_ACCESS_KEY as string;
    console.log(accessKey);
    const {submit} = useWeb3Forms({
        access_key: accessKey,
        settings: {
            subject: "New Contact Message from your Website",
        },
        onSuccess: (msg) => {
            setResult(msg);
            reset();
        },
        onError: (msg) => {
            setResult(msg);
        },
    });

    const handleFormSubmit = (data: any) => {
        submit({
            ...data,
            from_name: data.name,
            datetime: data.datetime,
            message: data.message,
        });
    };

    return (
        <section className="contact">
            <div className="contact-container">
                <h2 className="contact-title">Contact</h2>
                <p className="contact-description">
                    Have questions or want to book an appointment? We’d love to hear from you!
                </p>
                <div className="contact-content">
                    <form className="contact-form" onSubmit={handleSubmit(handleFormSubmit)}>
                        <input className="contact-input" type="text" {...register("name", {required: true})}
                               placeholder="Your Name"/>
                        <input className="contact-input" type="email" {...register("email", {required: true})}
                               placeholder="Your Email"/>
                        <textarea className="contact-input" {...register("message", {required: true})}
                                  placeholder="Your Message"></textarea>

                        <div className="input-container">
                            <input
                                className="contact-input"
                                type="datetime-local"
                                {...register("datetime", {required: true})}
                                id="datetime"
                            />
                            <label htmlFor="datetime" className="floating-label">Select Date & Time</label>
                        </div>
                        <button className="contact-button" type="submit">Send</button>
                    </form>

                    <div>{result}</div>

                    <div className="contact-details">
                        <h3>Contact Information</h3>
                        <p><strong>Phone:</strong> +353 89 607 2065</p>
                        <p><strong>Email:</strong> leixlipdoggrooming@gmail.com</p>
                        <p><strong>Address:</strong> W23PY29</p>
                        <div className="footer-section footer-social">
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <a className="social-icon"  href="https://www.facebook.com/people/Leixlip-Dog-Grooming/61572547896118/"
                                   target="_blank"
                                   rel="noreferrer"><FaFacebook/></a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-map">
                    <iframe
                        title="Dog Grooming Salon Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.526425808228!2d-6.464028184230879!3d53.37284347997856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48671d04ac7e9fcf%3A0x61e8f0f71b5f7f3b!2sConfey%2C%20Co.%20Kildare%2C%20W23%20PY29%2C%20Ireland!5e0!3m2!1sen!2sus!4v1677612846540!5m2!1sen!2us"
                        width="100%"
                        height="301"
                        style={{border: "0"}}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;