import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Cards from "./components/cards/cards";
import Carousel from "./components/carousel/carousel";
import Accordion from "./components/accordion/accordion";
import Section from "./components/section/section";
import Form from "./components/form/form";

function App() {
     return (
          <div>
               <Header />
               <Hero />
               <Carousel />
               <Cards />
               <Section />
               <Accordion />
               <Form />
               <footer>
                    <div>Copyright © LionHeart</div>
               </footer>
          </div>
     );
}

export default App;
