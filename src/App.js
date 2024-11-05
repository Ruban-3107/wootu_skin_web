import React, { useState, useEffect } from 'react';
import './App.css';
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
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import fallbackImage from './Assets/Header.png';
function App() {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const location = useLocation();
  const [heroData,setHeroData] = useState('')
  const getImageSrc = async (url, fallback) => {
    console.log({url, fallback});
    try {
      if(!url) return fallback;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Image not found');
      }
      return url;
    } catch {
      return fallback; // Return the fallback local image if the fetch fails
    }
  };

  const processImage = async (imageUrl) => {
    return await getImageSrc(`${strapi_url}${imageUrl}`, fallbackImage);
  };

  const fetchData = async () => {
    try {
      setIsContentLoaded(false); 
      let response = await axios.get(`${strapi_url}/api/landing-pages?populate=*`);
      console.log("check:::",response?.data?.data[0].hero_image.url);
      const imgSrc = await processImage(response.data.data[0]?.hero_image.url);
      console.log({imgSrc});
      if (response.data.data[0]) {
        response.data.data[0].hero_image.url = imgSrc; // Now you can safely assign
      } 
      setHeroData(response?.data?.data[0]);
      // setIsContentLoaded(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }finally {
      setIsContentLoaded(true); // Hide loader after data is fetched
    }
  };

  useEffect(() => {
   
   
    fetchData();
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // Don't render anything until content is loaded
  if (!isContentLoaded) {
    return <Loader />; // Only show the loader
  }

  
  return (
    <div className="App">
      
        <>
        <div className="App">
        {isContentLoaded && <CustomNavbar />}
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home data={heroData}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/treatmentpage" element={<TreatmentPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          {isContentLoaded && <WhatsAppButton />}
        { isContentLoaded && <Footer />}
          </div>
        </>
      
    </div>
  );
}

function AppWrapper() {
  return (  <ErrorBoundary>
    <Router>
      <App />
    </Router>
    </ErrorBoundary>
  );
}

export default AppWrapper;
