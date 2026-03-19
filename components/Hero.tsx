"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onRequestSolution: () => void;
  onScrollToHowItWorks: () => void;
}

export function Hero({ onRequestSolution, onScrollToHowItWorks }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1
              className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight"
              style={{ color: "#0B0F14" }}
            >
              Describe your problem. I'll design and build the solution.
            </h1>

            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: "#5F6B7A" }}
            >
              I help businesses turn messy ideas, manual processes, and broken
              workflows into simple, usable web apps that actually work for
              their users.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onRequestSolution}
                className="px-8 py-4 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: "#084168" }}
              >
                Request a Solution
              </button>

              <button
                onClick={onScrollToHowItWorks}
                className="px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300"
                style={{ color: "#084168" }}
              >
                See how it works
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-96">
              {/* Gradient Circles */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: "#084168" }}
              />
              <div
                className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
                style={{ backgroundColor: "#FE8F16" }}
              />

              {/* Geometric Shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-72 h-72 rounded-3xl shadow-2xl transform rotate-6"
                  style={{
                    backgroundColor: "white",
                    borderColor: "#E5E7EB",
                    borderWidth: "1px",
                  }}
                />
                <div
                  className="absolute w-64 h-64 rounded-3xl shadow-xl transform -rotate-3"
                  style={{ backgroundColor: "#084168", opacity: 0.05 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
