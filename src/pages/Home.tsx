import About from "../components/About/About.tsx";
import Contact from "../components/Contact/Contact.tsx";

export const Home = () => {
    return (
        <div>
            <section id="about"><About/></section>
            <section id="contact"><Contact/></section>
        </div>
    )
}