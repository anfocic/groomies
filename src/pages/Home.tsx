import Hero from "../components/Hero/Hero.tsx";
import About from "../components/About/About.tsx";
import Contact from "../components/Contact/Contact.tsx";

export const Home = () => {
    return (
        <div>
            <section id="hero"><Hero/></section>
            <section id="about"><About/></section>
            <section id="contact"><Contact/></section>
        </div>
    )
}