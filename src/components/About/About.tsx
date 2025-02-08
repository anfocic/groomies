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
                <div className="about-text">
                    <h2 className="about-title">Welcome to Leixlip Dog Grooming</h2>
                    <p className="about-description">
                        Leixlip’s friendly and caring dog grooming salon!
                        Founded in 2025, our salon is a passion project run by Sandra, who has always had a deep love
                        for dogs.
                    </p>
                    <p className="about-description">
                        With years of experience and a gentle touch, she treats every pup like her own, ensuring a
                        stress-free and enjoyable grooming experience.
                        Whether it's a simple wash or a full grooming session, we provide top-quality care tailored to
                        each dog's needs.
                    </p>
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

                </div>
                <div className="about-image">
                    <img src="img.png" alt="A happy, freshly groomed dog"/>
                </div>
            </div>
        </section>
    );
};

export default About;