import './index.css'
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Hero from "./components/Hero/Hero.tsx";
import About from './components/About/About.tsx';
import Header from "./components/Header/Header.tsx";

function App() {
    return (
        <div className="app-container">
            <Header/>
            <section id="home"><Hero/></section>
            <section id="about"><About/></section>
            <section id="contact"><Contact/></section>
            <Footer/>
        </div>
    )
}

export default App
