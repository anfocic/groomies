import './About.css';
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
    "image": "https://www.leixlip-dog-grooming.com/img.png",
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

const About = () => {
    return (
        <>
            <Helmet>
                <title>Professional Dog Grooming Services | Your Business Name</title>
                <meta name="description"
                      content="Get the best dog grooming services, including baths, brushing, and de-shedding treatments. Your pet deserves the best care!"/>
                <meta name="keywords" content="dog grooming, pet grooming, de-shedding, bath, brushing, nail trimming"/>
                <meta name="author" content="Leixlip Dog Grooming"/>
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <section className="about">
                <div className="about-container">
                    <div className="about-image">
                        <img src="img.png" alt="A happy, freshly groomed dog" loading="lazy" />
                    </div>
                    <div className="services-container">
                        {services.map((service, index) => (
                            <article className="service-card" key={index}>
                                <div className="service-icon">{service.icon}</div>
                                <h2 className="service-title">{service.title}</h2>
                                <p className="service-description">{service.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;