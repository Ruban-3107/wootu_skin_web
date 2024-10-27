import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image5 from "../../Assets/image05.png";
import Image6 from "../../Assets/image 06.png";
import Image7 from "../../Assets/image 07.png";
import Image8 from "../../Assets/image 08.png";
import Image9 from "../../Assets/image 09.png";
import fadeUpOnScroll from "../FadeUp/FadeUpOnScroll";
import css from "./Imagesec.css";
import FadeUpOnScroll from '../FadeUp/FadeUpOnScroll';

const ImageSection = () => {
  return (
    <div className="container py-5">
            <div className="text-center mb-4">
       
       <h2 className="d-inline-block">
         <span className="border-left pl-2"><span><svg xmlns="http://www.w3.org/2000/svg" width="11" height="58" viewBox="0 0 11 58" fill="none">
 <path d="M5.5 53.0051L5.5 4.99471" stroke="#D4AF37" stroke-width="10" stroke-linecap="square"/>
</svg></span> What we offer</span>
       </h2>
     </div>
      <div className="row">
        {/* Left Section (4 Columns) */}
      
        <div className="col-md-5">
        <FadeUpOnScroll>
        <div className="position-relative">
            <img
              src={Image5}
              alt="Offer Image"
              className="imagesec"
            />
            <div
              className="position-absolute bottom-0 w-100 text-center"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Lower opacity for background
                color: 'white',
                padding: '10px',
              }}
            >
              <h5 style={{ opacity: 1 }}>Anti-Aging Treatment</h5> {/* Fully opaque text */}

            </div>
            </div>
            </FadeUpOnScroll>
        </div>
       

      
        {/* Right Section (8 Columns) */}
        <div className="col-lg-6">
        <FadeUpOnScroll>
          <div className="row">
            {/* First Row (Full width Image) */}
            <div className="col-12 mb-3">
            <div className="position-relative">
            <img
              src={Image6}
              alt="Offer Image"
              className="imagesec"
            />
            <div
              className="position-absolute bottom-0 w-100 text-center"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Lower opacity for background
                color: 'white',
                padding: '10px',
              }}
            >
              <h5 style={{ opacity: 1 }}>Acne treatment & prevention</h5> {/* Fully opaque text */}

            </div>
            </div>
            </div>

            {/* Second Row (Two Images) */}
            <div className="col-6 mb-3">
            <div className="position-relative">
            <img
              src={Image7}
              alt="Offer Image"
              className="imagesec"
            />
            <div
              className="position-absolute bottom-0 w-100 text-center"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Lower opacity for background
                color: 'white',
                padding: '10px',
              }}
            >
              <h5 style={{ opacity: 1 }}>Brightning</h5> {/* Fully opaque text */}

            </div>
            </div>
            </div>
            <div className="col-6 mb-3">
            <div className="position-relative">
            <img
              src={Image8}
              alt="Offer Image"
              className="imagesec"
            />
            <div
              className="position-absolute bottom-0 w-100 text-center"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Lower opacity for background
                color: 'white',
                padding: '10px',
              }}
            >
              <h5 style={{ opacity: 1 }}>Facial</h5> {/* Fully opaque text */}

            </div>
            </div>
            </div>

            {/* Third Row (Full width Image) */}
            <div className="col-12">
            <div className="position-relative">
            <img
              src={Image9}
              alt="Offer Image"
              className="imagesec"
            />
            <div
              className="position-absolute bottom-0 w-100 text-center"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Lower opacity for background
                color: 'white',
                padding: '10px',
              }}
            >
              <h5 style={{ opacity: 1 }}>Microneedling</h5> {/* Fully opaque text */}

            </div>
            </div>
            </div>
          </div>
          </FadeUpOnScroll>
        </div>
       
      </div>
    </div>
  );
};

export default ImageSection;
