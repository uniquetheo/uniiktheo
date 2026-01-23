"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { ValueProposition } from "@/components/ValueProposition";
import { HowItWorks } from "@/components/HowItWorks";
import { TypesOfSolutions } from "@/components/TypesOfSolutions";
import { Credibility } from "@/components/Credibility";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { RequestForm } from "@/components/RequestForm";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <Hero
        onRequestSolution={() => setIsFormOpen(true)}
        onScrollToHowItWorks={scrollToHowItWorks}
      />

      <ProblemStatement />

      <ValueProposition />

      <HowItWorks />

      <TypesOfSolutions />

      <Credibility />

      <CTASection onRequestSolution={() => setIsFormOpen(true)} />

      <Footer />

      <RequestForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
