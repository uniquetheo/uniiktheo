import React from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input type="text" placeholder="Name" className="input" />
          <Input type="email" placeholder="Email" className="input" />
        </div>
        <Textarea placeholder="Message" className="input h-[150px]" />
        <Button className="btn">
          Submit <ArrowRight />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
