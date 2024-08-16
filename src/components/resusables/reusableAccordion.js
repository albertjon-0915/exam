import React, { useState } from "react";

function ReusableAccordion({ title, description }) {
     const [isOpen, setIsOpen] = useState(false);
     const arrow = require("../../media/accordionimg/accordion-arrow-pc.png");

     const accordionVisible = (e) => {
          setIsOpen(!isOpen);
     };

     return (
          <div className="accordion-item">
               <div className="accordion-header" onClick={accordionVisible}>
                    <h4 className={`${isOpen ? "" : "colorChange"}`}>{title}</h4>
                    <div>
                         <img src={arrow} alt="icon" className={`arrow ${isOpen ? "rotate" : ""}`} />
                    </div>
               </div>
               <p className={`${isOpen ? "visible" : "invisible"}`}>{description}</p>
          </div>
     );
}

export default ReusableAccordion;
