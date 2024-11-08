import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { strapi_url, token } from '../../common/utils';
import 'animate.css/animate.min.css';


export default function HeroContact(){
   
        const [hero_text_1, setHero_text_1] = useState('');
  const [hero_text_2, setHero_text_2] = useState('');
  const [hero_image, setHero_image] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`${strapi_url}/api/landing-pages?populate=*`);
      console.log(response?.data?.data[0].hero_image.url);
      setHero_text_1(response?.data?.data[0].hero_text_1);
      setHero_text_2(response?.data?.data[0].hero_text_2);
      setHero_image(response?.data?.data[0].hero_image.url);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="heroSection d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 hero-content">
            <div className="empty-space"></div>
            {hero_text_1 && <h1 className="hero-title">{hero_text_1}</h1>}
            {hero_text_2 && <p className="lead">{hero_text_2}</p>}
          </div>

          {/* Right Side - Image */}
          {hero_image && (
            <div className="col-lg-6 col-md-12 hero-image-section animate__animated animate__slideInRight">
              <img
                src={`${strapi_url}${hero_image}`} // Replace with your image path
                alt="Hero"
                className="img-fluid hero-image" // Bootstrap class for responsive images
                width={400}
                height={300}
              />
            </div>
          )}
        </div>
      </div>
    </section>
    )
}