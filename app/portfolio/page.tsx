"use client";

import { projects } from "@/lib/portfolio-data";
import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1
              className="text-4xl lg:text-6xl font-bold tracking-tight mb-6"
              style={{ color: "#0B0F14" }}
            >
              Previous Work
            </h1>
            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: "#5F6B7A" }}
            >
              Take a look at some of the solutions I've designed and built. Each
              project represents a unique challenge solved with clean code and
              thoughtful design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Container */}
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl border border-gray-100 ${
                    index % 2 !== 0 ? "lg:order-last" : ""
                  }`}
                >
                  <Image
                    src={project.imgSrc}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content Container */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2
                      className="text-3xl lg:text-4xl font-bold tracking-tight"
                      style={{ color: "#0B0F14" }}
                    >
                      {project.name}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-[#084168] text-xs font-semibold rounded-full uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3
                        className="text-sm font-bold uppercase tracking-widest mb-2"
                        style={{ color: "#084168" }}
                      >
                        The Problem
                      </h3>
                      <p
                        className="text-lg leading-relaxed"
                        style={{ color: "#5F6B7A" }}
                      >
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h3
                        className="text-sm font-bold uppercase tracking-widest mb-2"
                        style={{ color: "#084168" }}
                      >
                        The Solution
                      </h3>
                      <p
                        className="text-lg leading-relaxed"
                        style={{ color: "#5F6B7A" }}
                      >
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                      style={{ backgroundColor: "#084168" }}
                    >
                      View Live Project
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight mb-8"
            style={{ color: "#0B0F14" }}
          >
            Ready to build your solution?
          </h2>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl text-white text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ backgroundColor: "#084168" }}
          >
            Start Your Project
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
