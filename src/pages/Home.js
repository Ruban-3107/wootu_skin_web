"use client";
import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import HomeCard from "../Components/HomeCard/Homecard";
import Carousel from "../Components/Carousel/Carousel";
import Topservice from "../Components/Topservices/Topservice";
import TrustContent from "../Components/TrustContent/TrustContent";
import Testimonials from "../Components/Testimonial/Testimonial";

export default function Home(data){
  return(
    <>
    <HeroSection data={data}/>
    <HomeCard/>
    <Carousel/>
<Topservice/>
<TrustContent/>
<Testimonials/>

    </>
  )
}
