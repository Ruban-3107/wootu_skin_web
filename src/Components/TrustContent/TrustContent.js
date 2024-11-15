import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { strapi_url } from '../../common/utils';
import fallbackImage from '../../Assets/trust.png'; // Import your fallback local image

const TrustContent = () => {
  const [trust, setTrust] = useState([]);
  const [imageSrc, setImageSrc] = useState(fallbackImage); // State to hold the image source

  const fetchTrust = async () => {
    try {
      const response = await axios.get(`${strapi_url}/api/trusts?populate=*`);
      setTrust(response.data.data);
      const imgSrc = await processImage(response.data.data[0]?.image?.url);
      setImageSrc(imgSrc); // Set the processed image source
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchTrust();
  }, []);

  const getImageSrc = async (url, fallback) => {
    try {
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

  if (trust.length === 0) return null; // Return null if trust data is not available

  return (
    <section className="container py-5 trust-container">
      <div className="trust-title">
        <h1 className='sub-title'>{trust[0]?.title}</h1>
      </div>
      <div className="row align-items-center trust-row">
        {/* Left Side: Image */}
        <div className="col-md-11 col-lg-6 mt-5 col-sm-12 trust-img align-items-center justify-content-center">
          <img
            src={imageSrc}
            alt="Why you can trust us"
            width={450} // Adjust width
            height={450} // Adjust height
            className="img-car"
          />
        </div>
        {/* Right Side: Content */}
        <div className="col-md-12 col-lg-6 mt-5">
          <div className="trust-content">
            <strong className="trust-number">{trust[0]?.reviews}</strong>
            <p className="trust-para"> reviews shared by Wootu members</p>
          </div>
          <hr className='line-trust' />
          <div className="trust-content">
            <strong className="trust-number">{trust[0]?.doctor_answered}</strong>
            <p className="trust-para"> patient questions answered by doctors</p>
          </div>
          <hr className='line-trust' />
          <div className="trust-content">
            <strong className="trust-number">{trust[0]?.people_satisfactions}</strong>
            <p className="trust-para"> of members say Wootu helps them understand procedures</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustContent;
