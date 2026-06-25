// src/components/layout/Footer.tsx
"use client";

import { motion } from "framer-motion";
import {  Mail } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {  icon: <Mail size={16} />, href: "https://github.com/yourusername", label: "GitHub" },
  {  icon: <Mail size={16} />,  href: "https://linkedin.com/in/yourhandle", label: "LinkedIn" },
  { icon: <Mail size={16} />, href: "mailto:your@email.com", label: "Email" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#042C53" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(55,138,221,0.5), transparent)",
        }}
      />

      {/* Blob */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(55,138,221,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 py-14">

          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black"
                style={{
                  background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                }}
              >
                W
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Web{" "}
                <span style={{ color: "#378ADD" }}>Decoded</span>
              </span>
            </div>
            <p
              className="text-xs leading-relaxed text-center md:text-left max-w-[200px]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Building fast, scalable & beautiful web experiences.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <span
              className="text-[10px] font-bold tracking-[0.18em] uppercase"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Quick Links
            </span>
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium transition-colors duration-200 hover:text-white"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>

          {/* Socials + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <span
              className="text-[10px] font-bold tracking-[0.18em] uppercase"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Connect
            </span>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
               <a 
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(55,138,221,0.12)",
                    border: "1px solid rgba(55,138,221,0.2)",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Availability dot */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#22c55e" }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Open for new projects
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-2 py-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            © {new Date().getFullYear()} Web Decoded. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}