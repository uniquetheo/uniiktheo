"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function ProblemStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2
            className="text-3xl lg:text-5xl font-bold leading-tight"
            style={{ color: "#0B0F14" }}
          >
            Most businesses don't need 'more tech.' They need clarity.
          </h2>

          <div className="mt-12 space-y-12">
            <div className="text-left space-y-6">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#5F6B7A" }}
              >
                You might be dealing with:
              </p>

              <ul className="space-y-4">
                {[
                  "Too much manual work and spreadsheets",
                  "An idea that sounds great but feels hard to build",
                  "A system that works… but frustrates users",
                  "An MVP that needs structure, UX, or scale",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#084168" }}
                    />
                    <span className="text-lg" style={{ color: "#5F6B7A" }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: "#E5E7EB" }}>
              <p
                className="text-xl lg:text-2xl font-medium leading-relaxed"
                style={{ color: "#0B0F14" }}
              >
                The real problem isn't code.
                <br />
                It's turning what you want into something people can actually
                use.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
