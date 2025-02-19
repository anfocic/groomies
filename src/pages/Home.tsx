import {lazy, Suspense} from "react";

const Hero = lazy(() => import("../components/Hero/Hero.tsx"));
const Contact = lazy(() => import("../components/Contact/Contact.tsx"));
const Services = lazy(() => import("../components/Services/Services.tsx"));

export const Home = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <section id="home"><Hero/></section>
                <section id="services"><Services/></section>
                <section id="contact"><Contact/></section>
            </Suspense>
        </div>
    );
};

export default Home;