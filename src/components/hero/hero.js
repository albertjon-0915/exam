import React from "react";
import "./hero.css";
import ReusableHero from "../resusables/reusableHero";

function Hero() {
     const heroContent = {
          title: "Hero Text",
          subtitle: "Sub Hero Text Sentence",
     };

     return <ReusableHero title={heroContent.title} subtitle={heroContent.subtitle} />;
}

export default Hero;
