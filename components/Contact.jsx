import React from "react";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="z-10">
      <div className="flex flex-col gap-6 justify-evenly items-center my-16">
        <h3 className="uppercase font-bold text-lg font-mono">
          Get <span className="text-primary">in touch</span>
        </h3>
        <p>
          I'd love to hear from you! If you have questions, an opportunity or a
          feedback, use the form below.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
