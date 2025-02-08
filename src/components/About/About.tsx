import '../../App.css';

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

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-image">
                    <img src="img.png" alt="A happy, freshly groomed dog"/>
                </div>
                <div className="services-container">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;