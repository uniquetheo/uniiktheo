import React from "react";
import Particles from "react-tsparticles";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Services from "./Services";
import MyWork from "./MyWork";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-12 relative">
      <HeroSection />
      <AboutSection />
      <Services />
      <MyWork />
      <Contact />
    </div>
  );
};

export default LandingPage;
