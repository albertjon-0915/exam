import React from "react";

function ReusableHero({ title, subtitle }) {
     return (
          <div className="hero-container">
               <div className="hero-wrapper">
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
               </div>
          </div>
     );
}

export default ReusableHero;
