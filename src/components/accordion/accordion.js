import React from "react";
import "./accordion.css";
import ReusableAccordion from "./reusableAccordion";
import accordionData from "./accordionData";

function accordion() {
     return (
          <div className="accordion-container">
               <div className="accordion-wrapper">
                    <h2>Accordion</h2>
                    <ReusableAccordion
                         title={accordionData.item1.title}
                         description={accordionData.item1.description}
                    />
                    <ReusableAccordion
                         title={accordionData.item2.title}
                         description={accordionData.item2.description}
                    />
                    <ReusableAccordion
                         title={accordionData.item3.title}
                         description={accordionData.item3.description}
                    />
                    <ReusableAccordion
                         title={accordionData.item4.title}
                         description={accordionData.item4.description}
                    />
                    <ReusableAccordion
                         title={accordionData.item5.title}
                         description={accordionData.item5.description}
                    />
               </div>
          </div>
     );
}

export default accordion;
