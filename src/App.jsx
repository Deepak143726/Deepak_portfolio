// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from './components/Experience';
import Footer from "./components/Footer";

import SpannerDrawing from "./projects/Spanner"; 

import './App.css';

// Home page layout
function Home() {
  return (
    <div className="min-h-screen bg-bg text-white selection:bg-primary selection:text-black">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero />
        <Projects />
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spanner" element={<SpannerDrawing />} />
      </Routes>
    </Router>
  );
}
