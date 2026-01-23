"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  LayoutDashboard,
  Rocket,
  CreditCard,
  Workflow,
  TrendingUp,
} from "lucide-react";

export function TypesOfSolutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      icon: LayoutDashboard,
      title: "Internal tools & dashboards",
    },
    {
      icon: Rocket,
      title: "MVPs for startups and new ideas",
    },
    {
      icon: CreditCard,
      title: "Booking, payment, and automation systems",
    },
    {
      icon: Workflow,
      title: "Platforms that replace manual workflows",
    },
    {
      icon: TrendingUp,
      title: "Improvements to existing apps (UX, structure, performance)",
    },
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
          className="text-center mb-16"
        >
          <h2
            className="text-3xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "#0B0F14" }}
          >
            Types of solutions I help with
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-start gap-4"
                style={{ borderColor: "#E5E7EB", borderWidth: "1px" }}
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#F7F8FA" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "#084168" }} />
                  </div>
                </div>

                <h3
                  className="text-lg font-medium pt-2"
                  style={{ color: "#0B0F14" }}
                >
                  {solution.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl text-center mt-12 leading-relaxed"
          style={{ color: "#5F6B7A" }}
        >
          If your problem involves users, processes, or data — I can help.
        </motion.p>
      </div>
    </section>
  );
}
