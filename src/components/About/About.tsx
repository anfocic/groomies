import '../../App.css';

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-text">
                    <h2 className="about-title">About Us</h2>
                    <p className="about-description">
                        Welcome to Leixlip Dog Grooming, Leixlip’s friendly and caring dog grooming salon!
                        Founded in 2025, our salon is a passion project run by Sandra, who has always had a deep love for dogs.
                    </p>
                    <p className="about-description">
                        With years of experience and a gentle touch, she treats every pup like her own, ensuring a stress-free and enjoyable grooming experience.
                        Whether it's a simple wash or a full grooming session, we provide top-quality care tailored to each dog's needs.
                    </p>
                </div>
                <div className="about-image">
                    <img src="psi.jpeg" alt="A happy, freshly groomed dog" />
                </div>
            </div>
        </section>
    );
};

export default About;