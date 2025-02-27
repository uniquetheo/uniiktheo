import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Services from "./Services";
import MyWork from "./MyWork";
import Contact from "./Contact";
import MyParticles from "./ui/myParticles";

const LandingPage = () => {
  return (
    <div className="relative">
      <MyParticles />
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
