import React from "react";
import "./section.css";
import ReusableSection from "./reusableSection";
import sectionData from "./sectionData";

function Section() {
     return (
          <div className="section-container">
               <div className="section-wrapper">
                    <h2>Section</h2>

                    <ReusableSection
                         classSelector={"content1"}
                         title={"Card Title"}
                         description={sectionData.item1.description}
                         img={sectionData.item1.image}
                    />

                    <ReusableSection
                         classSelector={"content2"}
                         title={"Card Title"}
                         description={sectionData.item2.description}
                         img={sectionData.item2.image}
                    />
               </div>
          </div>
     );
}

export default Section;
