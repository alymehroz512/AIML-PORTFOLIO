// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer'; // ✅ New import
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import CustomCursor from './components/CustomCursor';
import DevTools from './pages/Dev';
import Contact from './pages/Contact';

// ✅ Scrolls to top smoothly on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <CustomNavbar />
      <CustomCursor />

      {/* All Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/devtools" element={<DevTools />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ✅ Footer added below all routes */}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
