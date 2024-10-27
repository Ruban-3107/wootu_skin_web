import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import CustomNavbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import logo from "./Assets/Wootlogo.png";
import Footer from './Components/Footer/Footer';
import Contact from './pages/Contact';
import WhatsAppButton from './Components/WhatsappFloat/WhatsappFloating';
import TreatmentPage from './pages/TreatmentPage';
import Loader from './Components/Loader/Loader';

function App() {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start loading content on route change
    setIsContentLoaded(false);

    // Simulate API call delay; adjust based on actual loading times
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 5000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="App">
      {!isContentLoaded ? (
        <Loader />
      ) : (
        <>
          <CustomNavbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatmentpage" element={<TreatmentPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <WhatsAppButton />
          <Footer />
        </>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
