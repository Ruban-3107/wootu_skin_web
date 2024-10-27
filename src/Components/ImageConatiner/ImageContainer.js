import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageContainer.css'; // For additional CSS
import Image10 from "../../Assets/image 10.png";
import FadeUpOnScroll from "../FadeUp/FadeUpOnScroll";

const ImageContainer = () => {
  return (
<FadeUpOnScroll>
    <div className="bg-container ">
      <div className="overlay">
        <div className="content-container text-center">
            <div className="container">
          <h1 className="heading-text">Discover the Power of Beautiful Skin</h1>
          <p className="subtitle-text">we believe skincare isn’t just about looking good—it’s about feeling confident and embracing your natural beauty every day. Start your journey with us today!</p>
          </div>
        </div>
      </div>
    </div>
    </FadeUpOnScroll>
  );
};

export default ImageContainer;
