import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './FloatingCallButton.css';

const FloatingCallButton = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+1234567890'; // Replace with your actual phone number
  };

  return (
    <button 
      className="floating-call-btn btn btn-primary"
      onClick={handleCallClick}
      aria-label="Call us"
    >
      <i className="fas fa-phone call-icon"></i>
    </button>
  );
};

export default FloatingCallButton;
