import React, { useState, useEffect } from 'react';
import './App.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import CustomNavbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './Components/Footer/Footer';
import Contact from './pages/Contact';
import WhatsAppButton from './Components/WhatsappFloat/WhatsappFloating';
import TreatmentPage from './pages/TreatmentPage';
import Loader from './Components/Loader/Loader';
import axios from 'axios';
import { strapi_url, } from '../src/common/utils';
function App() {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const location = useLocation();
  const [heroData,setHeroData] = useState('')

  useEffect(() => {
    // Start loading content on route change
    setIsContentLoaded(false);

   try{
    const fetchData = async () => {
      try {
        const response = await axios.get(`${strapi_url}/api/landing-pages?populate=*`);
        console.log(response?.data?.data[0]);
        setHeroData(response?.data?.data[0]);
        setIsContentLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

   }catch(err){
console.log(err);
   }
   
  }, [location]);

  

  
  return (
    <div className="App">
      {!isContentLoaded ? (
        <Loader />
      ) : (
        <>
          <CustomNavbar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home data={heroData}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/treatmentpage" element={<TreatmentPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
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
