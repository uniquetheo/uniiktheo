"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Clock } from "lucide-react";

interface CTASectionProps {
  onRequestSolution: () => void;
}

export function CTASection({ onRequestSolution }: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32"
      style={{ backgroundColor: "#F7F8FA" }}
    >
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
            Let's solve your problem
          </h2>

          <p
            className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#5F6B7A" }}
          >
            If you have a challenge, an idea, or a system that isn't working the
            way it should, let's talk.
          </p>

          <p className="text-lg leading-relaxed" style={{ color: "#5F6B7A" }}>
            Explain your situation, and I'll get back to you with clear next
            steps.
          </p>

          <div className="pt-4">
            <button
              onClick={onRequestSolution}
              className="px-10 py-5 rounded-xl text-white text-lg font-medium shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#084168" }}
            >
              Request a Solution
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 pt-4">
            <Clock className="w-5 h-5" style={{ color: "#5F6B7A" }} />
            <p className="text-sm" style={{ color: "#5F6B7A" }}>
              You'll hear back within 24–48 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
