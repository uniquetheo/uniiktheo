"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

export function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Simple to use",
    "Easy to maintain",
    "Built around real user behavior",
  ];

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32"
      style={{ backgroundColor: "#F7F8FA" }}
    >
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2
            className="text-3xl lg:text-5xl font-bold text-center leading-tight"
            style={{ color: "#0B0F14" }}
          >
            I focus on solving problems — not showing off tools.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Left Card - Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{ borderColor: "#E5E7EB", borderWidth: "1px" }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#0B0F14" }}
              >
                Instead of starting with a tech stack, I start with questions:
              </h3>

              <ul className="space-y-4">
                {[
                  "What's broken?",
                  "Who is this for?",
                  "What does success look like?",
                ].map((question, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#084168" }}
                    />
                    <span className="text-lg" style={{ color: "#5F6B7A" }}>
                      {question}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Card - Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{ borderColor: "#E5E7EB", borderWidth: "1px" }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#0B0F14" }}
              >
                From there, I design and build web apps that are:
              </h3>

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      className="w-6 h-6 flex-shrink-0"
                      style={{ color: "#084168" }}
                    />
                    <span className="text-lg" style={{ color: "#5F6B7A" }}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-center leading-relaxed pt-8"
            style={{ color: "#0B0F14" }}
          >
            You get a solution that fits your business, not just a collection of
            features.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
