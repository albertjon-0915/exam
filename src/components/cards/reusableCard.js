import React from "react";

function reusableCard({ img, title, description }) {
     return (
          <div className={`card-section-item`}>
               <img src={img} alt="img" />
               <h3>{title}</h3>
               <p>{description}</p>
          </div>
     );
}

export default reusableCard;
