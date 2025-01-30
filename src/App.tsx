import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Terms from "./pages/Terms.tsx";
import {Home} from "./pages/Home.tsx";
import {Layout} from "./components/Layout/Layout.tsx";

function App() {
    return (
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
    )
}

export default App
