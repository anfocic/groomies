import {useState} from "react";
import {useForm} from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import './Contact.css';
import {FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhone} from "react-icons/fa";
import {DateUtils} from "../dateUtils.ts";

const Contact = () => {
    const {register, reset, handleSubmit} = useForm();
    const [result, setResult] = useState<string | null>(null);

    const accessKey = import.meta.env.VITE_WEB3_ACCESS_KEY as string;

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
            datetime: DateUtils.formatDateTime(data.datetime),
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
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <p><strong><FaPhone/></strong>
                                <a href="tel:+353896072065"> +353 89 607 2065</a></p>
                            <p><strong><FaEnvelope/></strong>
                                <a href="mailto:leixlipdoggrooming@gmail.com"> leixlipdoggrooming@gmail.com</a>
                            </p>
                            <p>
                                <strong><FaLocationArrow/></strong>
                                <a href="https://www.google.com/maps/search/?api=1&query=W23PY29"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    W23PY29
                                </a>
                            </p>
                        </div>
                        <div className="working-hours">
                            <h3>Working Hours</h3>
                            <dl>
                                <dt>Monday - Friday:</dt>
                                <dd>09:30 - 17:30</dd>
                            </dl>
                        </div>

                        <div className="follow-us">
                            <h3>Follow Us</h3>
                            <a href="https://www.facebook.com/people/Leixlip-Dog-Grooming/61572547896118/"
                               target="_blank"
                               rel="noreferrer"><FaFacebook/></a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
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