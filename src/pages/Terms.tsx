import {Link} from "react-router-dom";

const Terms = () => {
    console.log('henlo')
    return (
        <div className="terms-container">
            <h1>Terms & Conditions</h1>
            <p>By booking an appointment at <strong>Leixlip Dog Grooming</strong>, you agree to the following terms:</p>

            <h2>1. Appointments and Cancellations</h2>
            <ul>
                <li>Appointments must be booked in advance. Walk-ins are subject to availability.</li>
                <li>A minimum of <strong>[X hours/days]</strong> notice is required to cancel or reschedule.</li>
            </ul>

            <h2>2. Health and Behavior</h2>
            <ul>
                <li>All dogs must be fully vaccinated (proof may be required).</li>
                <li>Aggressive behavior may result in refusal of service or an extra handling fee.</li>
            </ul>

            <h2>3. Matting Policy</h2>
            <ul>
                <li>Dogs with matted coats require extra time and a surcharge of €20 or more.</li>
            </ul>

            <h2>4. Accidents and Injuries</h2>
            <p>While we take care, minor nicks or injuries can occur. In severe cases, we will notify the owner immediately.</p>

            <h2>5. Payment & Liability</h2>
            <ul>
                <li>Payment is due at the time of service.</li>
                <li>The salon is not responsible for pre-existing conditions or adverse reactions to grooming products.</li>
            </ul>

            <h2>6. Photography</h2>
            <p>We may take photos of pets for promotional use. Notify us if you do not consent.</p>

            <p>By using our services, you agree to these terms.</p>

            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default Terms;