import { useTranslation } from 'react-i18next';
import React from 'react';
import './i18n';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TourPackages from './pages/TourPackages';
import CustomTravel from './pages/CustomTravel';
import CulturalExperience from './pages/CulturalExperience';
import Contact from './components/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  const { t } = useTranslation();
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/tour-packages" element={<TourPackages />} />
            <Route path="/services/custom-travel" element={<CustomTravel />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/custom-travel" element={<CustomTravel />} />
            <Route path="/tour-packages" element={<TourPackages />} />
            <Route path="/cultural-experience" element={<CulturalExperience />} />
            <Route path="/homepage" element={<Home />} />
          </Routes>
          <Home />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 