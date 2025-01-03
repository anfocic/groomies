import './index.css'
import Services from "./components/Services/Services.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Hero from "./components/Hero/Hero.tsx";
import About from './components/About/About.tsx';
import Header from "./components/Header/Header.tsx";

function App() {
    return (
        <div>
            <Header/>
            <section id="home"><Hero/></section>
            <section id="services"><Services/></section>
            <section id="about"><About/></section>
            {/*<section id="gallery"><Gallery/></section>*/}
            <section id="contact"><Contact/></section>
            <Footer/>
        </div>
    )
}

export default App
