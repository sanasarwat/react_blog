import React from "react";
import web from "../Images/rocket.png";
import Common from './Common';
const Home = () => {
  return (
    <>
      <Common
       name="Grow Your Business with"
       imgsrc={web} 
       visit="/services"
       btname="Get Started"/>
    </>
  );
};

export default Home;
