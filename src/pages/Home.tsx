import Hero from "../components/Hero/Hero.tsx";
import Contact from "../components/Contact/Contact.tsx";
import {Services} from "../components/Services/Services.tsx";

export const Home = () => {
    return (
        <div>
            <section id="home"><Hero/></section>
            <section id="services"><Services/></section>
            <section id="contact"><Contact/></section>
        </div>
    )
}