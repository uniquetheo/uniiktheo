import { works } from "@/lib/data";
import Link from "next/link";

import React from "react";
const MyWork = () => {
  return (
    <section id="my-work" className="">
      <div className="flex flex-col gap-6 justify-evenly items-center mt-16">
        <h3 className="uppercase font-bold text-lg font-mono">
          My <span className="text-primary">Latest Works</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work) => (
            <Link href={work.link} key={work.name} target="_blank">
              <div
                className="card max-w-[400px] h-[300px] border relative overflow-hidden rounded-lg shadow flex flex-col-reverse p-4 hover:scale-105"
                style={{
                  backgroundImage: `url(${work.imgSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
                <div className="bg-black bg-opacity-50 rounded opacity-0 hover:opacity-100 transition-all duration-300">
                  <h4 className="text-white text-center">{work.name}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
