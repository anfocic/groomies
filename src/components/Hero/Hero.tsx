import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">Leixlip Dogs Grooming</h1>
                <p className="hero-subtitle">Where Your Dog is Treated Like Royalty</p>

                <div className="hero-sections">
                    {/* Left Text Section */}
                    <div className="hero-text">
                        <ul className="hero-list">
                            <li>🌿 <strong>One-on-One Grooming</strong> - Relax knowing your furry friend gets personalized care in a calm, stress-free environment.</li>
                            <li>🐾 <strong>Dog-Friendly Salon</strong> - Our cozy salon is designed for your dog’s comfort, ensuring a soothing and enjoyable experience.</li>
                            <li>✂️ <strong>Tailored Grooming</strong> - From bathing to styling, we tailor every service to suit your dog’s needs, leaving them looking and feeling their best!</li>
                        </ul>
                        <p className="hero-location">📍 [Your Location]</p>
                        <p className="hero-contact">📞 Call us at <strong>[Your Number]</strong> to book an appointment today!</p>
                        <button className="hero-button">Book Now</button>
                    </div>

                    {/* Right Image Section */}
                    <div className="hero-image">
                        <img src="ldg-logo1.jpeg" alt="Grooming Dog" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;