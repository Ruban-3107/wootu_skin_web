import React from "react";
import HeroAbout from "../Components/HeroAbout/HeroAbout";
import Whoweare from "../Components/Whoweare/Whoweare";
import ImageSection from "../Components/ImageSection/Imagesec";
import ImageContainer from "../Components/ImageConatiner/ImageContainer";

export default function About(){
    return (
        <>
        <HeroAbout/>
        <Whoweare/>
        <ImageSection/>
        <ImageContainer/>
        </>
    )
}