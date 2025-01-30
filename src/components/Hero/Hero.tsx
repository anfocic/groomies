import './Hero.css';

const services = [
    {
        title: 'One-on-One Grooming',
        description: 'A complete grooming package including bath, haircut, nail trimming ✂️.',
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

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-subtitle">Where Your Dog is Treated Like Royalty</p>

                <div className="hero-sections">
                    {/* Left Text Section */}
                    <div className="hero-text">
                        <div className="services-container">
                            {services.map((service, index) => (
                                <div className="service-card" key={index}>
                                    <div className="service-icon">{service.icon}</div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            ))}
                        </div>
                        <button className="hero-button">Book Now</button>
                    </div>

                    {/* Right Image Section */}
                    <div className="hero-image">
                        <img src="img.png" alt="Logo"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;