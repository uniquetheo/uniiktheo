// "use client";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Services from "./Services";
import MyWork from "./MyWork";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <div className="relative">
      <div className="z-10 flex flex-col gap-12 ">
        <HeroSection />
        <AboutSection />
        <Services />
        <MyWork />
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
