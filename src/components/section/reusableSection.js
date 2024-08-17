import React from "react";

function section({ classSelector, title, description, img }) {
     return (
          <div className={classSelector}>
               <img src={img} alt="img" />
               <div className="content-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
               </div>
          </div>
     );
}

export default section;
