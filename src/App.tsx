import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Terms from "./pages/Terms.tsx";
import {Home} from "./pages/Home.tsx";
import {Layout} from "./components/Layout/Layout.tsx";
import {HelmetProvider} from "react-helmet-async";

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
                    </Routes>
                </Router>
            </div>
        </HelmetProvider>
    )
}

export default App
