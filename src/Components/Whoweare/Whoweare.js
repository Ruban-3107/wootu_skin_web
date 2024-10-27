import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image3 from "../../Assets/image 03.png";
import Image4 from "../../Assets/image 04.png";
import css from "./Whoweare.css";
import FadeUpOnScroll from '../FadeUp/FadeUpOnScroll';

export default function Whoweare() {
  return (
    <section className="conatiner who-we-are my-5">
      {/* Section Heading */}
      <FadeUpOnScroll>
      <div className="text-center mb-4">
       
        <h2 className="d-inline-block">
          <span className="border-left pl-2"><span><svg xmlns="http://www.w3.org/2000/svg" width="11" height="58" viewBox="0 0 11 58" fill="none">
  <path d="M5.5 53.0051L5.5 4.99471" stroke="#D4AF37" stroke-width="10" stroke-linecap="square"/>
</svg></span> Who We Are</span>
        </h2>
      </div>
      </FadeUpOnScroll>

<div className='container'>
<FadeUpOnScroll>
      <div className="row align-items-center ">
        <div className="col-md-6">
          <img
            src={Image3}
            alt="Who We Are"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <p className='con-text'>
         <span>W</span>
          e are a passionate team of dermatologists, skincare specialists, and product innovators committed to delivering high-quality skincare.
           
          </p>
        </div>
      </div>
</FadeUpOnScroll>
<FadeUpOnScroll>
      <div className="row align-items-center mb-4">
        <div className="col-md-6">
        <p className='con-text'>
         <span>F</span>
         ounded on the principles of innovation, care, and sustainability, combines the latest research with nature-inspired ingredients to create products that are safe, effective, and suitable for all skin types.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={Image4}
            alt="Our Mission"
            className="img-fluid"
          />
        </div>
      </div>
      </FadeUpOnScroll>
      </div>
    </section>
  );
};


