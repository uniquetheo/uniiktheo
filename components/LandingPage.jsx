"use client";

import React, { useEffect } from "react";
import Particles from "particles.js";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Services from "./Services";
import MyWork from "./MyWork";
import Contact from "./Contact";

const LandingPage = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 80, // Number of particles
          density: {
            enable: true,
            value_area: 800, // Area covered by particles
          },
        },
        color: {
          value: "#000000", // Particle color
        },
        shape: {
          type: "circle", // Shape of particles
        },
        opacity: {
          value: 0.5, // Opacity of particles
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3, // Size of particles
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150, // Distance between linked particles
          color: "#000000",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6, // Speed of particle movement
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse", // Particles repel on hover
          },
          onclick: {
            enable: true,
            mode: "push", // Particles push on click
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <div className="flex flex-col gap-12 relative">
      <div
        id="particles-js"
        className="absolute inset-0 w-full h-full opacity-50"
      ></div>
      <div className="z-10">
        <HeroSection />
        <AboutSection />
        <Services />
        <MyWork />
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
