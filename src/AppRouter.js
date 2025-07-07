import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import CertificationDetail from './pages/CertificationDetail'; // Uncomment when you create the page
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Route untuk detail sertifikat */}
          {/* <Route path="/certification/:id" element={<CertificationDetail />} /> */}
          {/* Route untuk halaman lain yang mungkin Anda butuhkan: */}
          {/* <Route path="/experience" element={<Experience />} /> */}
          {/* <Route path="/skills" element={<Skills />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
