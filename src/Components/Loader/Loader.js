// Loader.js
import React, { useEffect, useState } from 'react';
import './Loader.css';
import logo from '../../Assets/Wootlogo.png'; // Replace with the actual path to your logo image

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Wait until the page fully loads before showing the loader
    window.addEventListener('load', () => {
      setShowLoader(true);
    });
  }, []);

  if (!showLoader) return null;

  return (
    <div className="loader-container d-flex justify-content-center align-items-center">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="loader-logo" />
        <div className="dot-container">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
