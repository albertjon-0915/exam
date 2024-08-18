import React, { useEffect, useState } from "react";
import "./carousel.css";

function Carousel() {
     const [groupedItems, setGroupedItems] = useState();

     const getContainer = () => {
          let allItems = document.querySelector(".grouped-items");
          setGroupedItems(allItems);
     };

     const clickPrev = () => {
          getItemWidth((itemWidth) => (groupedItems.scrollLeft -= itemWidth));
     };

     const clickNext = () => {
          getItemWidth((itemWidth) => (groupedItems.scrollLeft += itemWidth));
     };

     const getItemWidth = (callback) => {
          const item = document.querySelector(".items");

          if (item) {
               const itemWidth = item.getBoundingClientRect().width;
               callback(itemWidth);
          }
     };

     useEffect(() => {
          getContainer();
     }, []);

     const carouselImg = {
          image1: require("../../assets/carouselimg/carousel-img01.png"),
          image2: require("../../assets/carouselimg/carousel-img02.png"),
          image3: require("../../assets/carouselimg/carousel-img03.png"),
          image4: require("../../assets/carouselimg/carousel-img04.png"),
          image5: require("../../assets/carouselimg/carousel-img05.png"),
          image6: require("../../assets/carouselimg/carousel-img06.png"),
          arrowNext: require("../../assets/carouselimg/carousel-arrow-next.png"),
          arrowPrev: require("../../assets/carouselimg/carousel-arrow-prev.png"),
     };

     return (
          <div className="carousel-container">
               <div className="title-wrapper">
                    <h2>Carousel</h2>
               </div>
               <div className="carousel-wrapper">
                    <button className="prev-btn" onClick={clickPrev}>
                         <img src={carouselImg.arrowPrev} alt="icon" />
                    </button>
                    <button className="next-btn" onClick={clickNext}>
                         <img src={carouselImg.arrowNext} alt="icon" />
                    </button>

                    <div className="grouped-items">
                         <div className="items">
                              <img src={carouselImg.image1} alt="img" />
                         </div>
                         <div className="items">
                              <img src={carouselImg.image2} alt="img" />
                         </div>
                         <div className="items">
                              <img src={carouselImg.image3} alt="img" />
                         </div>
                         <div className="items">
                              <img src={carouselImg.image4} alt="img" />
                         </div>
                         <div className="items">
                              <img src={carouselImg.image5} alt="img" />
                         </div>
                         <div className="items">
                              <img src={carouselImg.image6} alt="img" />
                         </div>{" "}
                         <div className="items">
                              <img src={carouselImg.image1} alt="img" />
                         </div>
                         <div className="items">
                              <img src={carouselImg.image2} alt="img" />
                         </div>
                         <div className="items">
                              <img src={carouselImg.image3} alt="img" />
                         </div>
                         <div className="items">
                              <img src={carouselImg.image4} alt="img" />
                         </div>
                         <div className="items">
                              <img src={carouselImg.image5} alt="img" />
                         </div>
                         <div className="items">
                              <img src={carouselImg.image6} alt="img" />
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Carousel;
