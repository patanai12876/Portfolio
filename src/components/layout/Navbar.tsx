// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracker
  useEffect(() => {
    const sections = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-5"
      >
        <div
          className="w-full max-w-5xl flex items-center justify-between px-6 py-3.5 rounded-2xl transition-all duration-300"
          style={{
            background: scrolled
              ? "rgba(247,249,252,0.85)"
              : "rgba(247,249,252,0.6)",
            backdropFilter: "blur(20px)",
            border: scrolled
              ? "1.5px solid rgba(55,138,221,0.15)"
              : "1.5px solid rgba(55,138,221,0.08)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(4,44,83,0.08)"
              : "none",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 cursor-pointer select-none"
            >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black"
              style={{
                background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
              }}
            >
              N
            </div>
            <span
              className="text-base font-extrabold tracking-tight"
              style={{ color: "#042C53" }}
            >
              Noor{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #378ADD, #185FA5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Fatima
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="relative px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200"
                  style={{
                    color: isActive ? "#185FA5" : "#475569",
                    background: isActive
                      ? "rgba(55,138,221,0.08)"
                      : "transparent",
                    cursor: "pointer",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: "rgba(55,138,221,0.08)",
                        border: "1px solid rgba(55,138,221,0.18)",
                      }}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#contact");
              }}
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                boxShadow: "0 4px 14px rgba(55,138,221,0.28)",
              }}
            >
              Hire Me
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl transition-colors duration-200"
              style={{
                background: menuOpen
                  ? "rgba(55,138,221,0.1)"
                  : "transparent",
                border: "1.5px solid rgba(55,138,221,0.15)",
                cursor: "pointer",
              }}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <X size={18} style={{ color: "#185FA5" }} />
              ) : (
                <Menu size={18} style={{ color: "#185FA5" }} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-24 left-6 right-6 z-40 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(247,249,252,0.97)",
              backdropFilter: "blur(24px)",
              border: "1.5px solid rgba(55,138,221,0.15)",
              boxShadow: "0 16px 48px rgba(4,44,83,0.12)",
            }}
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleClick(link.href)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold text-left transition-colors duration-200 hover:bg-[rgba(55,138,221,0.07)]"
                  style={{
                    color:
                      active === link.href.replace("#", "")
                        ? "#185FA5"
                        : "#042C53",
                    cursor: "pointer",
                    background:
                      active === link.href.replace("#", "")
                        ? "rgba(55,138,221,0.08)"
                        : "transparent",
                  }}
                >
                  {link.label}
                  {active === link.href.replace("#", "") && (
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#378ADD" }}
                    />
                  )}
                </motion.button>
              ))}

              <div
                className="h-px my-2"
                style={{ background: "rgba(55,138,221,0.1)" }}
              />

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#contact");
                }}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}