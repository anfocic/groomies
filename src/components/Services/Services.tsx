import './Services.css'

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

export const Services = () => {

    return (
        <section className="services-container">
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
        </section>
    )
}