"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      setIsOpen(false);
      const contactSection = document.getElementById("cta-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: "#084168" }}
            >
              UniikTheo
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-[#084168]"
                style={{ color: "#5F6B7A" }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90 shadow-sm"
              style={{ backgroundColor: "#084168" }}
              onClick={scrollToContact}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" style={{ color: "#084168" }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: "#084168" }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium"
                  style={{ color: "#5F6B7A" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="w-full px-5 py-3 rounded-lg text-white text-center font-medium"
                style={{ backgroundColor: "#084168" }}
                onClick={scrollToContact}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
