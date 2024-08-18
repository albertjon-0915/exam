import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import "./header.css";

function Header() {
     const [isOpen, setIsOpen] = useState(false);
     const [isResized, setIsResized] = useState(false);

     const menuVisible = (e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
     };

     useEffect(() => {
          let width = window.innerWidth;

          if (width > 992) {
               setIsResized(false);
          } else {
               setIsResized(true);
          }
     }, []);

     return (
          <div className="header-container">
               <div className="header-wrapper">
                    <div className="nav-item">
                         <img src={logo} alt="logo" />
                         <a href="" className={isOpen && isResized ? "active" : ""} onClick={(e) => menuVisible(e)}>
                              <span className="bar1"></span>
                              <span className="bar2"></span>
                              <span className="bar3"></span>
                         </a>
                    </div>
                    <div className="nav-item" id={`nav-options-${isOpen && isResized ? "visible" : "invisible"}`}>
                         <ul>
                              <li className="item1">
                                   <a href="">ABOUT</a>
                              </li>
                              <li className="item2">
                                   <a href="">SERVICE</a>
                              </li>
                              <li className="item3">
                                   <a href="">ACCESS</a>
                              </li>
                              <li className="item4">
                                   <a href="">RECRUIT</a>
                              </li>
                         </ul>
                         <button className="contact-btn">CONTACT</button>
                    </div>
               </div>
          </div>
     );
}

export default Header;
