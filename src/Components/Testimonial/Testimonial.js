import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'; 
import { strapi_url } from '../../common/utils';
import axios from 'axios';
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios(`${strapi_url}/api/testimonials`);
        setTestimonials(response.data.data); // Assuming data.data contains the array of testimonials
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonial">
      <div className="container py-5">
        <div className="row">
          {testimonials?.map((testimonial) => (
            <div className="col-md-4" key={testimonial.id}>
              <div className="card h-100 text-center p-4">
                <p className="card-text">{testimonial.message}</p>
                <div className="mb-3">
                  {/* 5-star rating, adjust based on likes or use a static rating */}
                  {[...Array(testimonial.likes)].map((_, index) => (
                    <FaStar key={index} color="#FFD700" />
                  ))}
                </div>
                <h5 className="card-title">- {testimonial.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
