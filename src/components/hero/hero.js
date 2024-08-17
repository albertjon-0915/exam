import React from "react";
import "./hero.css";

function Hero() {
     const heroContent = {
          title: "Hero Text",
          subtitle: "Sub Hero Text Sentence",
     };

     return (
          <div className="hero-container">
               <div className="hero-wrapper">
                    <h1>{heroContent.title}</h1>
                    <h3>{heroContent.subtitle}</h3>
               </div>
          </div>
     );
}

export default Hero;
