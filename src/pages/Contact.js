import React from "react";
import HeroContact from "../Components/HeroContact/HeroContact";
import ContactForm from "../Components/ContactForm/ContactForm";
import FormModal from "../Components/FormModel/FormModel";
import OurLocations from "../Components/Location/Location";

export default function Contact(){
    return(
        <>
<HeroContact/>
<FormModal/>
<OurLocations/>
</>
    )
}