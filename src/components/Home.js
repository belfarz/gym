import React from "react";
import Body from "./Body";
import Fitness from './Fitness';
import Trainers from './Trainers';
import Achievements from './Achievements';
import Pricing from './Pricing';
import Contact from "./Contact";
import Gallery from "./Gallery";

export default function Home(){
    return(
        <>
      <Body />
      <Fitness />
      <Trainers />
      <Achievements />
      <Pricing />
      <Gallery />
      <Contact />
     
      
        </>
    )
}