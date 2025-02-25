"use client";

import { useState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => {
      return { ...formData, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      alert("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="text"
            placeholder="Name"
            name="name"
            className="input"
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            className="input"
            onChange={handleChange}
            required
          />
        </div>
        <Textarea
          placeholder="Message"
          name="message"
          onChange={handleChange}
          className="input h-[150px]"
        />
        <Button className="btn" disabled={isSubmitting}>
          {isSubmitted ? "Submitted" : "Submit"}
          <ArrowRight />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
