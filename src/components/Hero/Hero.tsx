import './Hero.css';
import {Helmet} from "react-helmet-async";

const services = [
    {
        title: 'One-on-One Grooming',
        description: 'A complete grooming package including bath, haircut, and nail trimming ✂️.',
        icon: '🛁',
    },
    {
        title: 'Bath & Brush',
        description: 'Pamper your pup with a luxurious bath and brushing to keep their coat shiny and clean.',
        icon: '🧼',
    },
    {
        title: 'De-Shedding Treatment',
        description: 'Reduce shedding with our specialized de-shedding service for a healthier coat.',
        icon: '🐾',
    },
];

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
                        <h1 className="hero-title">Welcome to Leixlip Dog Grooming</h1>
                        <p className="hero-subtitle">Pampering your pets with love and care. Book an appointment
                            today!</p>
                        <a href="#contact" className="cta-button" aria-label="Book an Appointment">Book Now</a>
                    </div>
                    <div className="hero-image">
                        <img src="leixlip-dog-grooming-logo.webp"
                             width="300"
                             height="299"
                             alt="Leixlip Dog Grooming logo featuring two happy Pomeranians"/>
                    </div>
                </div>
            </header>

            <section className="services">
                <div className="services-container">
                    <h2 className="hero-title">Our Services</h2>
                    <ul className="services-list">
                        {services.map((service, index) => (
                            <li className="service-card" key={index}>
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Hero;