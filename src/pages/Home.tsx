import Hero from "../components/Hero/Hero.tsx";
import Contact from "../components/Contact/Contact.tsx";

export const Home = () => {
    return (
        <div>
            <section id="about"><Hero/></section>
            <section id="contact"><Contact/></section>
        </div>
    )
}