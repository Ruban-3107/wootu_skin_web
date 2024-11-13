import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FadeUpOnScroll from '../FadeUp/FadeUpOnScroll';
import 'animate.css/animate.min.css';
import HeroImg from "../../Assets/hero-img2.png";

const HeroSection = (data) => {
  return (
(data && <FadeUpOnScroll>
    <section   className="heroSection d-flex align-items-center">

      <div className="container ">
        <div className="row align-items-center hero-row">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 hero-content">
            <div className="empty-space"></div>
             <h1 className="hero-title">{data.data.data.hero_text_1}</h1>
            <p className="lead3">{data.data.data.hero_text_2}</p>
           {<button className='hero-btn'>Book an Appointment</button> }
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6 col-md-12 hero-image-section">
  {data?.data?.data?.hero_image?.url ? (
    <img
      src={`${data.data.data.hero_image.url}`} // URL for the image
      alt="Hero"
      className="img-fluid hero-image" // Bootstrap class for responsive images
      width={400}
      height={300}
    />
  ) : (
    <img
      src={HeroImg} // Local path for fallback image
      alt="Hero"
      className="img-fluid hero-image" // Bootstrap class for responsive images
      width={400}
      height={300}
    />
  )}
</div>

        </div>
      </div>
    </section>
    </FadeUpOnScroll>)
 

 
    
  );
};

export default HeroSection;
