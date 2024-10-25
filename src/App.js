import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './Components/Footer/Footer';
import Contact from './pages/Contact';
import WhatsAppButton from './Components/WhatsappFloat/WhatsappFloating';
import TreatmentPage from './pages/TreatmentPage';


function App() {
  return (
    <Router>
    <div>
    <CustomNavbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/TreatmentPage" element={<TreatmentPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton/>
      <Footer/>
  
    </div>
  </Router>
  );
}

export default App;
