import { services } from "@/lib/data";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="my-6">
      <div className="flex flex-col gap-6 justify-evenly items-center">
        <h3>
          My <span className="text-primary">Services</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="card max-w-[400px] border rounded shadow flex flex-col gap-3 justify-evenly p-4 hover:scale-105"
            >
              {service.icon}
              <h4>{service.name}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
