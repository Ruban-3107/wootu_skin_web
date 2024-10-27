import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FadeUpOnScroll from '../FadeUp/FadeUpOnScroll';
import { strapi_url, token } from '../../common/utils';
import 'animate.css/animate.min.css';

const HeroSection = () => {
  const [hero_text_1, setHero_text_1] = useState('');
  const [hero_text_2, setHero_text_2] = useState('');
  const [hero_image, setHero_image] = useState('');
  const [contact_button, setContact_button] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`${strapi_url}/api/landing-pages?populate=*`);
      console.log(response?.data?.data[0].hero_image.url);
      setHero_text_1(response?.data?.data[0].hero_text_1);
      setHero_text_2(response?.data?.data[0].hero_text_2);
      setHero_image(response?.data?.data[0].hero_image.url);
      setContact_button(response?.data?.data[0].contact_button.url);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>

<FadeUpOnScroll>
    <section   className="heroSection d-flex align-items-center">

      <div className="container hero-section">
        <div className="row align-items-center hero-row">
          {/* Left Side - Text */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 hero-content">
            <div className="empty-space"></div>
            {hero_text_1 && <h1 className="hero-title">{hero_text_1}</h1>}
            {hero_text_2 && <p className="lead">{hero_text_2}</p>}
           {contact_button && <button className='hero-btn w-60'><a href='#'>{contact_button}</a></button> }
          </div>

          {/* Right Side - Image */}
          {hero_image && (
            <div className="col-lg-6 col-md-12 hero-image-section ">
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
    </FadeUpOnScroll>
 

 
    </>
  );
};

export default HeroSection;
