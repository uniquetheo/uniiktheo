"use client";

import { projects } from "@/lib/portfolio-data";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PortfolioPreview() {
  const featuredProjects = projects.slice(0, 3); // Show first 3 projects

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2
              className="text-3xl lg:text-5xl font-bold tracking-tight mb-4"
              style={{ color: "#0B0F14" }}
            >
              Recent Works
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#5F6B7A" }}
            >
              A snapshot of some of the web products I've designed and built recently.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 font-bold px-6 py-3 rounded-xl border-2 transition-all duration-300 hover:scale-105"
            style={{ color: "#084168", borderColor: "#084168" }}
          >
            See All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href="/portfolio">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-gray-100 mb-6">
                  <Image
                    src={project.imgSrc}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white font-bold text-lg px-6 py-3 border-2 border-white rounded-xl">
                      View Details
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3
                    className="text-xl lg:text-2xl font-bold tracking-tight group-hover:underline transition-all"
                    style={{ color: "#0B0F14" }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="text-base line-clamp-2"
                    style={{ color: "#5F6B7A" }}
                  >
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
