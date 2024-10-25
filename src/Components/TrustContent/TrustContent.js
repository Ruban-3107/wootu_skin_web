import 'bootstrap/dist/css/bootstrap.min.css';
// components/WhyYouCanTrustUs.js
import React,{useState,useEffect} from 'react';
import css from "./TrustContent.module.css"
import axios from 'axios';
import { strapi_url } from '../../common/utils';


const TrustContent = () => {

  const [trust, setTrust] = useState([]);

  const fetchTrust = async () => {
    try {
      const response = await axios.get(`${strapi_url}/api/trusts?populate=*`);
      console.log(response.data.data);
      
      setTrust(response.data.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchTrust();
  }, []);
  return (
    trust.length > 0  && <section className="container py-5 trust-contanier">
    <div className="trust-title">
    <h2 >{trust[0]?.title}</h2>
    </div>
  <div className="row align-items-center trust-row">
    {/* Left Side: Image */}
    <div className="col-md-12 col-lg-6 trust-img">
      <img
        src={`${strapi_url}${trust[0]?.image.url}`} // Replace with your image path
        alt="Why you can trust us"
        width={500} // Adjust width
        height={500} // Adjust height
    className="img-car"
      />
    </div>
    {/* Right Side: Content */}
    <div className="col-md-12 col-lg-5">
      
      <div className="trust-content"><strong className="trust-number">{trust[0]?.reviews}</strong> <p className="trust-para"> reviews shared by Wootu members</p></div>
      <hr />
      <div className="trust-content"><strong className="trust-number">{trust[0]?.doctor_answered}</strong> <p className="trust-para"> patient questions answered by doctors</p></div>
      <hr />
      <div className="trust-content"><strong className="trust-number">{trust[0]?.people_satisfactions}</strong> <p className="trust-para"> of members say wootu helps them understand procedures</p></div>
    </div>
  </div>
</section>
  );
};

export default TrustContent;
