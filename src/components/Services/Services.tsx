import './Services.css';

const Services = () => {
    const services = [
        {
            title: 'One-on-One Grooming',
            description: 'A complete grooming package including bath, haircut, nail trimming, and ear cleaning.',
            icon: '🛁',
        },
        {
            title: 'Bath & Brush',
            description: 'Pamper your pup with a luxurious bath and brushing to keep their coat shiny and clean.',
            icon: '🧼',
        },
        {
            title: 'Nail Trimming',
            description: 'Safe and precise nail trimming to ensure your dog’s comfort and paw health.',
            icon: '✂️',
        },
        {
            title: 'Teeth Cleaning',
            description: 'Gentle teeth cleaning for fresh breath and better dental health.',
            icon: '🦷',
        },
        {
            title: 'De-Shedding Treatment',
            description: 'Reduce shedding with our specialized de-shedding service for a healthier coat.',
            icon: '🐾',
        },
        {
            title: 'Puppy Spa',
            description: 'A gentle and fun spa experience designed especially for puppies.',
            icon: '🐶',
        },
    ];

    return (
        <section className="services">
            <h2 className="services-title">Our Dog Grooming Services</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;