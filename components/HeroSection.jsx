import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div id="home" className="w-full min-h-[calc(100vh-64px)] mt-16">
      <div className="min-h-[calc(100vh-64px)] flex flex-col justify-evenly items-center gap-4">
        <div className="avatar w-full flex flex-col items-center gap-4">
          <div className="aspect-square w-40 h-40 bg-primary rounded-full overflow-hidden shadow">
            <Image
              src="/images/me-.png"
              alt="me"
              width={1440}
              height={1440}
              className="object-contain w-40"
            />
          </div>
          <h3 className={`text-center font-semibold font-mono`}>
            Hi! <span className="text-primary">I'm Theophilus Mercifield</span>{" "}
            👋
          </h3>
        </div>
        <div className="flex flex-col gap-4 items-center text-center max-w-[500px]">
          <h2 className={`text-5xl text-balance font-mono`}>
            Web Developer based in Accra.
          </h2>
          <p>
            I am a web developer with half a decade of industry experience
            crafting solutions for individuals and businesses
          </p>
        </div>
        <div className="buttons w-full flex items-center justify-center flex-wrap gap-4 mx-auto">
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
