import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Terms from "./pages/Terms.tsx";
import {Home} from "./pages/Home.tsx";
import {Layout} from "./components/Layout/Layout.tsx";
import {HelmetProvider} from "react-helmet-async";
import Blog from "./pages/Blog.tsx";
import Contact from "./components/Contact/Contact.tsx";

function App() {
    return (
        <HelmetProvider>
            <div className="app-container">
                <Router>
                    <Routes>
                        <Route path="/" element={
                            <Layout>
                                <Home/>
                            </Layout>
                        }/>
                        <Route path="/terms" element={
                            <Layout>
                                <Terms/>
                            </Layout>
                        }/>
                        <Route path="/services" element={
                            <Layout>
                                <Home/>
                            </Layout>
                        }/>
                        <Route path="/contact" element={
                            <Layout>
                                <Contact/>
                            </Layout>
                        }/>
                        <Route path="/blog" element={
                            <Layout>
                                <Blog/>
                            </Layout>
                        }/>
                    </Routes>
                </Router>
            </div>
        </HelmetProvider>
    )
}

export default App
