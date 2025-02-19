import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/Layout/Layout.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const Terms = lazy(() => import("./pages/Terms.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));

function App() {
    return (
        <Router>
            <HelmetProvider>
                <div className="app-container">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Layout><Home /></Layout>} />
                            <Route path="/terms" element={<Layout><Terms /></Layout>} />
                            <Route path="/blog" element={<Layout><Blog /></Layout>} />
                        </Routes>
                    </Suspense>
                </div>
            </HelmetProvider>
        </Router>
    );
}

export default App;