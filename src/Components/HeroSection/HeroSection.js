
import 'bootstrap/dist/css/bootstrap.min.css';
import FadeUpOnScroll from '../FadeUp/FadeUpOnScroll';
import { strapi_url } from '../../common/utils';
import 'animate.css/animate.min.css';

const HeroSection = (data) => {
  return (
(data && <FadeUpOnScroll>
    <section   className="heroSection d-flex align-items-center">

      <div className="container hero-section">
        <div className="row align-items-center hero-row">
          {/* Left Side - Text */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 hero-content">
            <div className="empty-space"></div>
             <h1 className="hero-title">{data.data.datahero_text_1}</h1>
            <p className="lead">{data.data.data.hero_text_2}</p>
           {<button className='hero-btn w-60'><a href='#'>Book an appointment</a></button> }
          </div>

          {/* Right Side - Image */}
          {data?.data?.data?.hero_image && (
            <div className="col-lg-6 col-md-12 hero-image-section ">
              <img
                src={`${strapi_url}${data?.data?.data?.hero_image.url}`} // Replace with your image path
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
    </FadeUpOnScroll>)
 

 
    
  );
};

export default HeroSection;
