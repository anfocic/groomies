import '../../App.css';

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-text">
                    <h2 className="about-title">About Us</h2>
                    <p className="about-description">
                        We are a team of passionate professionals dedicated to delivering innovative solutions for businesses of all sizes. Our mission is to empower companies by providing tools and strategies that foster growth, efficiency, and success.
                    </p>
                    <p className="about-description">
                        With years of experience and a commitment to excellence, we strive to exceed expectations and create long-lasting partnerships with our clients.
                    </p>
                </div>
                <div className="about-image">
                    <img src="psi.jpeg" alt="About Us" />
                </div>
            </div>
        </section>
    );
};

export default About;