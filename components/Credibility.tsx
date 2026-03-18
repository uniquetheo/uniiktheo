"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Credibility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-12 rounded-3xl shadow-xl"
          style={{ borderColor: "#E5E7EB", borderWidth: "1px" }}
        >
          <h2
            className="text-3xl lg:text-4xl font-bold text-center mb-8"
            style={{ color: "#0B0F14" }}
          >
            Built for real-world use
          </h2>

          <div className="space-y-6 text-center">
            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: "#5F6B7A" }}
            >
              I've worked on products across travel, NGOs, creative businesses,
              and digital platforms — always with a focus on usability, clarity,
              and long-term value.
            </p>

            <p
              className="text-lg lg:text-xl leading-relaxed font-medium"
              style={{ color: "#0B0F14" }}
            >
              I care about building things people actually use, not things that
              just look good in screenshots.
            </p>
          </div>

          {/* Placeholder for future testimonials */}
          <div
            className="mt-12 pt-12 border-t"
            style={{ borderColor: "#E5E7EB" }}
          >
            <p className="text-center text-sm" style={{ color: "#5F6B7A" }}>
              Client testimonials coming soon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
