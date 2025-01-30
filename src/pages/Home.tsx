import Hero from "../components/Hero/Hero.tsx";
import About from "../components/About/About.tsx";
import Contact from "../components/Contact/Contact.tsx";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

export const Home = () => {
    return (
        <div>
            <Header/>
            <section id="hero"><Hero/></section>
            <section id="about"><About/></section>
            <section id="contact"><Contact/></section>
            <Footer/>

        </div>
    )
}