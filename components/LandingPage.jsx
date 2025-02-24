import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Services from "./Services";
import MyWork from "./MyWork";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <MyWork />
      <Contact />
    </>
  );
};

export default LandingPage;
