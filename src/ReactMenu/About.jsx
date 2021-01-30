import React from "react";
import Common from './Common';
import web from "../Images/visit.svg";

const About = () => {
  return (
    <>
     <Common
       name="Welcome To About Page"
       imgsrc={web} 
       visit="/contact"
       btname="Contact Us"
     />
    </>
  );
};

export default About;
