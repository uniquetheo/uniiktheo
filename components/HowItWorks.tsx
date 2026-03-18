"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MessageSquare, Lightbulb, Code, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: MessageSquare,
      title: "You explain the problem",
      description:
        "Tell me what you're trying to fix, improve, or build. No technical language required.",
    },
    {
      icon: Lightbulb,
      title: "I think through the solution",
      description:
        "I break the problem down, propose a clear approach, and highlight risks or opportunities.",
    },
    {
      icon: Code,
      title: "We build and refine",
      description:
        "Once aligned, I design and build the product with a strong focus on usability and clarity.",
    },
    {
      icon: CheckCircle,
      title: "You get something that works",
      description:
        "A clean, functional solution that users understand and your business can rely on.",
    },
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl lg:text-5xl font-bold leading-tight"
            style={{ color: "#0B0F14" }}
          >
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  style={{ borderColor: "#E5E7EB", borderWidth: "1px" }}
                >
                  {/* Step Number */}
                  <div
                    className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md"
                    style={{ backgroundColor: "#084168", color: "white" }}
                  >
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "#F7F8FA" }}
                    >
                      <Icon className="w-7 h-7" style={{ color: "#084168" }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#0B0F14" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#5F6B7A" }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-16 left-full w-full h-0.5 -translate-x-1/2"
                    style={{ backgroundColor: "#E5E7EB" }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
