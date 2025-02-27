import { services } from "@/lib/data";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="z-10">
      <div className="flex flex-col gap-6 justify-evenly items-center mt-16">
        <h3 className="uppercase font-bold text-lg font-mono">
          My <span className="text-primary">Services</span>
        </h3>
        <p className="max-w-[750px] text-justify">
          Web services I offer cover a large range. Solution provided is custom
          built to address your specific needs. What ever your needs are,
          solutions will be provided to your preference. All you have to do is
          outline your needs and I will take care of the rest.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="card max-w-[400px] border rounded shadow flex flex-col gap-3 justify-evenly p-4 hover:scale-105"
            >
              {service.icon}
              <h4 className="text-primary font-bold">{service.name}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
