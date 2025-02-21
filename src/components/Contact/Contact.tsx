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

    const openMap = () => {
        const address = "673 River Forest, Leixlip, Co. Kildare, Ireland";
        const encodedAddress = encodeURIComponent(address);

        if (navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad")) {
            window.location.href = `https://maps.apple.com/?q=${encodedAddress}`;
        } else {
            window.location.href = `https://maps.google.com/?q=${encodedAddress}`;
        }
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
                                <a href="#" onClick={openMap} className="address-link">
                                    673 River Forest Leixlip, Co. Kildare W23 PY29
                                </a>
                            </p>
                        </div>
                        <div className="working-hours">
                            <h3>Working Hours</h3>
                            <dl>
                                <dt>Monday - Friday</dt>
                                <dd>09:30 - 17:30</dd>
                            </dl>
                        </div>

                        <div className="follow-us">
                        <h3>Follow Us</h3>
                            <a href="https://www.facebook.com/people/Leixlip-Dog-Grooming/61572547896118/"
                               target="_blank"
                               aria-label="Visit our Facebook profile"
                               rel="noreferrer"><FaFacebook/></a>

                            <a href="https://www.instagram.com/leixlipdoggrooming/"
                               aria-label="Visit our Instagram profile"
                               target="_blank" rel="noreferrer"><FaInstagram/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;