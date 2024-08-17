import React from "react";
import "./cards.css";
import cardContent from "./cardData";
import ReusableCard from "./reusableCard";

function cards() {
     return (
          <div className="section-container">
               <div className="card-container">
                    <h2>Section Title SP</h2>
                    <div className="card-wrapper">
                         <h3>4 Column card on PC</h3>
                         <div className="card-section1">
                              <ReusableCard
                                   img={cardContent.item1.image}
                                   title={cardContent.item1.title}
                                   description={cardContent.item1.text}
                              />
                              <ReusableCard
                                   img={cardContent.item2.image}
                                   title={cardContent.item2.title}
                                   description={cardContent.item2.text}
                              />
                              <ReusableCard
                                   img={cardContent.item3.image}
                                   title={cardContent.item3.title}
                                   description={cardContent.item3.text}
                              />
                              <ReusableCard
                                   img={cardContent.item4.image}
                                   title={cardContent.item4.title}
                                   description={cardContent.item4.text}
                              />
                         </div>
                         title
                         <h3>3 Column card on PC</h3>
                         <div className="card-section2">
                              <ReusableCard
                                   img={cardContent.item5.image}
                                   title={cardContent.item5.title}
                                   description={cardContent.item5.text}
                              />
                              <ReusableCard
                                   img={cardContent.item6.image}
                                   title={cardContent.item6.title}
                                   description={cardContent.item6.text}
                              />
                              <ReusableCard
                                   img={cardContent.item7.image}
                                   title={cardContent.item7.title}
                                   description={cardContent.item7.text}
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default cards;
