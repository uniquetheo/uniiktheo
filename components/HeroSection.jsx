import React from "react";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import { ArrowBigRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div id="home" className="w-full min-h-[calc(100vh-64px)] mt-16">
      <div className="min-h-[calc(100vh-64px)] flex flex-col justify-evenly items-center border">
        <div className="avatar w-full flex flex-col items-center gap-4">
          <div className="aspect-square w-40 h-40 bg-primary rounded-full"></div>
          <h3 className="text-center font-semibold">
            Hi! I'm Theophilus Mercifield 👋
          </h3>
        </div>
        <div className="flex flex-col gap-4 items-center text-center max-w-[500px]">
          <h2 className="text-5xl text-balance">
            Web Developer based in Accra.
          </h2>
          <p>
            I am a web developer with half a decade of industry experience
            crafting solutions for individuals and businesses
          </p>
        </div>
        <div className="buttons w-full flex items-center justify-center gap-4 mx-auto">
          <Button>
            Connect with me
            <ArrowBigRight />
          </Button>
          <Button variant="secondary">
            Download Resume
            <ArrowDown />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
