import { Globe2, GraduationCap } from "lucide-react";
import { Cloud } from "lucide-react";
import { Smartphone } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Building2 } from "lucide-react";
import { Briefcase } from "lucide-react";
import { Code } from "lucide-react";

export const NavLinks = [
  { name: "Home", path: "/", slug: "home" },
  { name: "About", path: "/#about", slug: "about" },
  { name: "Services", path: "/#services", slug: "services" },
  { name: "My Work", path: "/#my-work", slug: "my-work" },
  // { name: "Testimonials", path: "/#testimonials", slug: "testimonials" },
];

export const skills = [
  {
    name: "Languages",
    description: "HTML, CSS, Javascript, Typescript, Kotlin, Java",
    icon: <Code />,
  },
  {
    name: "Education",
    description: "HND in IT, BTech in IT (Software Engineering)",
    icon: <GraduationCap />,
  },
  {
    name: "Frameworks",
    description: "React.js, Next.js, Springboot, ReactNative, WordPress",
    icon: <Briefcase />,
  },
];

export const tools = [
  {
    name: "vs-code",
    imgSrc: "/images/vs-code.svg",
  },
  {
    name: "github",
    imgSrc: "/images/github.svg",
  },
  {
    name: "firebase",
    imgSrc: "/images/firebase.svg",
  },
  {
    name: "mongo",
    imgSrc: "/images/mongodb.svg",
  },
  {
    name: "figma",
    imgSrc: "/images/figma.svg",
  },
  {
    name: "vercel",
    imgSrc: "/images/vercel.svg",
  },
];

export const services = [
  {
    name: "Corporate Website",
    description:
      "An informative website showcasing the values and services to potential stakeholders",
    icon: <Building2 />,
  },
  {
    name: "SaaS Web App",
    description: "A Web Solution for a particular problem for users",
    icon: <Cloud />,
  },
  {
    name: "E-Commerce Site",
    description: "An web app to offer sale of goods or service online",
    icon: <ShoppingCart />,
  },
  {
    name: "Mobile App",
    description: "Andriod/iOS Native Application for an organization",
    icon: <Smartphone />,
  },
];

export const works = [
  {
    name: "Artist site - Brapurple",
    link: "https://brapurple.me",
    imgSrc: "/images/brapurple.png",
  },
  {
    name: "Job Portal - Jobify",
    link: "https://jobassistant.netlify.app",
    imgSrc: "/images/jobify.png",
  },
  {
    name: "Rock Paper Scissors Game",
    link: "https://uniik-rock-paper-scissors.netlify.app/",
    imgSrc: "/images/rock-p-s.png",
  },
  {
    name: "Quiz Portal - Erudite Challenge",
    link: "https://eruditechallenge.netlify.app",
    imgSrc: "/images/erudite.png",
  },
];

export const socials = [
  {
    name: "Call /Whatsapp",
    link: "https://wa.me/233546845585",
    icon: "/images/whatsapp.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/theophilus-mercifield-84009414a/",
    icon: "/images/linkedin.svg",
  },
  {
    name: "GitHub",
    link: "https://github.com/uniquetheo",
    icon: "/images/github-blue.svg",
  },
  {
    name: "Email",
    link: "mailto:unique.theo98@gmail.com",
    icon: "/images/email.svg",
  },
];
