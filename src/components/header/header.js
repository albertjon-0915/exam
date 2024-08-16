import React from "react";
import logo from "../../media/logo.svg";
import "./header.css";

function Header() {
     return (
          <div className="header-container">
               <div className="header-wrapper">
                    <div className="nav-item">
                         <img src={logo} alt="logo" />
                    </div>
                    <div className="nav-item" id="nav-options">
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
                    </div>
                    <div className="nav-item">
                         <button className="contact-btn">CONTACT</button>
                    </div>
               </div>
          </div>
     );
}

export default Header;
