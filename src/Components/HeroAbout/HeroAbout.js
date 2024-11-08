import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Herimg from "../../Assets/Group 19.png";
import Styles from "./HeroAbout.css";
import axios from 'axios';
import { strapi_url } from "../../common/utils";
import FadeUpOnScroll from "../FadeUp/FadeUpOnScroll";

export default function HeroAbout(){
// async function fetchData(){
//   try {
//     const response = await axios.get(`${strapi_url}/api/landing-pages?populate=*`);
//     console.log(response?.data?.data[0].hero_image.url);
    
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }
//   useEffect(()=>{
//    fetchData()
//   },[])
    return(
      <FadeUpOnScroll>
        <section className="heroSection container-fluid py-5">
            <div className="container">
        <div className="row HeroAbout-row">
          <div className="col-md-5 text-center text-md-left">
            <h1 className="display-4 font-weight-bold">About Us</h1>
            <h3 className="my-3">Our Mission: Radiant Skin for Everyone</h3>
            <p className="lead">
            we believe that everyone deserves to feel confident in their skin. Our mission is to empower you with effective, science-backed skincare solutions that enhance natural beauty and promote long-term skin health.
            </p>
            {/* <button className="btn btn-primary mt-3">Get Started</button> */}
          </div>
          <div className="col-md-6 text-center">
            <img
              src={Herimg}
              alt="Hero"
              className="img-fluid"
            />
          </div>
        </div>
        </div>
      </section>
      </FadeUpOnScroll>
    )
}