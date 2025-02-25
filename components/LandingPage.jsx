// "use client";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Services from "./Services";
import MyWork from "./MyWork";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-12 relative">
      <div className="z-10">
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
