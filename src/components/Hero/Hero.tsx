import './Hero.css';
import {Helmet} from "react-helmet-async";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Leixlip Dog Grooming",
    "image": "https://www.leixlip-dog-grooming.com/logo.png",
    "@id": "https://www.leixlip-dog-grooming.com/",
    "url": "https://www.leixlip-dog-grooming.com/",
    "telephone": "+353 89 607 2065",
    "email": "leixlipdoggrooming@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "673 River Forest",
        "addressLocality": "Leixlip",
        "addressRegion": "Kildare County",
        "postalCode": "W23 PY29",
        "addressCountry": "IE"
    },
    "openingHours": "Mo-Fr 09:30-17:30",
    "priceRange": "$$",
    "service": [
        {
            "@type": "Service",
            "name": "One-on-One Grooming",
            "description": "A complete grooming package including bath, haircut, and nail trimming."
        },
        {
            "@type": "Service",
            "name": "Bath & Brush",
            "description": "Pamper your pup with a luxurious bath and brushing to keep their coat shiny and clean."
        },
        {
            "@type": "Service",
            "name": "De-Shedding Treatment",
            "description": "Reduce shedding with our specialized de-shedding service for a healthier coat."
        }
    ]
};

const Hero = () => {
    return (
        <>
            <Helmet>
                <title>Leixlip Dog Grooming | Professional Dog Grooming Services </title>
                <meta name="description"
                      content="Get the best dog grooming services, including baths, brushing, and de-shedding treatments. Your pet deserves the best care!"/>
                <meta name="keywords" content="dog grooming, pet grooming, de-shedding, bath, brushing, nail trimming"/>
                <meta name="author" content="Leixlip Dog Grooming"/>
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <header className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-header">
                            <h1 className="hero-title">
                                Welcome to<br/> Leixlip Dog Grooming
                            </h1>
                            <div className="hero-image">
                                <img src="leixlip-dog-grooming-logo.webp"
                                     alt="Leixlip Dog Grooming logo featuring two happy Pomeranians"/>
                            </div>
                        </div>
                        <div className="cta-section">
                            <p className="hero-subtitle">
                                Pampering your pets with love and care.<br/>
                                Book an appointment today!
                            </p>
                            <a href="#contact" className="cta-button" aria-label="Book an Appointment">Book Now</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Hero;