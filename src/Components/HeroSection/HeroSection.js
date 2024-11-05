
import 'bootstrap/dist/css/bootstrap.min.css';
import FadeUpOnScroll from '../FadeUp/FadeUpOnScroll';
import { strapi_url } from '../../common/utils';
import 'animate.css/animate.min.css';

const HeroSection = (data) => {
  console.log("data?.data?.data?.hero_image:::",data?.data?.data?.hero_image)
  return (
(data && <FadeUpOnScroll>
    <section   className="heroSection d-flex align-items-center">

      <div className="container hero-section">
        <div className="row align-items-center hero-row">
          {/* Left Side - Text */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 hero-content">
            <div className="empty-space"></div>
             <h1 className="hero-title">{data.data.data.hero_text_1}</h1>
            <p className="lead">{data.data.data.hero_text_2}</p>
           {<button className='hero-btn'><a href='#'>Book an Appointment</a></button> }
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6 col-md-12 hero-image-section">
  {data?.data?.data?.hero_image?.url ? (
    <img
      src={`${strapi_url}${data.data.data.hero_image.url}`} // URL for the image from API
      alt="Hero"
      className="img-fluid hero-image" // Bootstrap class for responsive images
      width={400}
      height={300}
    />
  ) : (
    <img
      src="../../Assets/hero-section.png" // Local path for fallback image
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
