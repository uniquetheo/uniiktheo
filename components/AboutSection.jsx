import { skills, tools } from "@/lib/data";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="">
      <div className="flex flex-col gap-6 justify-evenly items-center mt-16">
        <h3 className="uppercase font-bold text-lg font-mono">
          About <span className="text-primary">Me</span>
        </h3>

        <p className="text-justify max-w-[750px]">
          Creative and detail-oriented Web Developer with a strong foundation in
          graphic design, offering innovative solutions to visual communication
          challenges. Proficient in design tools, web frameworks, and modern
          technologies, passionate about creating visually appealing and
          user-friendly designs. Adept at transforming concepts into compelling
          solutions in software and multimedia assets.
        </p>
        <div className="border border-primary w-20 mt-2 mb-4 hidden sm:block"></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((section, index) => {
            return (
              <div
                key={index}
                className="card max-w-[400px] border rounded shadow flex flex-col gap-3 justify-evenly p-4 hover:scale-105"
              >
                {section.icon}
                <h4 className="text-primary font-bold">{section.name}</h4>
                <p>{section.description}</p>
              </div>
            );
          })}
        </div>
        <div className="tools w-full max-w-[750px] my-4 mx-auto">
          <h3>Main tools I use</h3>
          <div className="flex flex-wrap gap-3 my-2">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="w-[60px] h-[60px] border relative rounded shadow p-4 hover:scale-105"
              >
                <Image src={tool.imgSrc} alt={tool.name} fill className="p-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
