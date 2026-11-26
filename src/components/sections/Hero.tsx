// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F7F9FC] pt24">
      
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(55,138,221,0.12) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(24,95,165,0.09) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-[30%] left-[15%] w-[300px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(55,138,221,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid overlay - subtle */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#185FA5 1px, transparent 1px), linear-gradient(90deg, #185FA5 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-28 pb-20 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide"
            style={{
              background: "rgba(55,138,221,0.1)",
              border: "1px solid rgba(55,138,221,0.25)",
              color: "#185FA5",
            }}
          >
            <Sparkles size={14} className="text-[#378ADD]" />
            Business Growth & Digital Solutions 
            <span className="w-2 h-2 rounded-full bg-[#378ADD] animate-pulse" />
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[1.0] tracking-tight mb-6"
          style={{ color: "#042C53" }}
        >
          Helping Businesses{" "}
          <span
            className="relative inline-block"
            style={{
              background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
             Grow &amp; Scale
          </span>
          <br />
          in the Digital World
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-6 flex justify-center text-[clamp(1rem,2vw,1.35rem)]"
          style={{ color: "#185FA5", width: "100%" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <span className="font-medium" style={{ color: "#475569" }}>
              I build
            </span>
            <span
              className="font-bold"
              style={{
                color: "#378ADD",
                minWidth: "clamp(210px, 24vw, 340px)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              <TypeAnimation
                sequence={[
                  "Custom Websites",
                  2000,
                  "Web Applications",
                  2000,
                  "SaaS Products",
                  2000,
                  "End to End Digital Solutions",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="max-w-xl mx-auto text-base leading-relaxed mb-10 font-medium"
          style={{ color: "#475569" }}
        >
          I help businesses turn ideas into growth through smart strategy,
          modern technology, and scalable SaaS solutions, all tailored to
          build a stronger and more competitive business.
        </motion.p>

        {/* CTAs */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.8 }}
  className="flex flex-col sm:flex-row items-center justify-center gap-4"
>
  <a
    href="#projects"
    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
    style={{
      background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
      boxShadow: "0 4px 20px rgba(55,138,221,0.3)",
    }}
  >
    View Projects

    <ArrowRight
      size={16}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </a>

  <a
    href="#contact"
    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.03]"
    style={{
      background: "rgba(55,138,221,0.08)",
      border: "1.5px solid rgba(55,138,221,0.25)",
      color: "#185FA5",
    }}
  >
    Start a Project
  </a>
</motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#475569" }}>
              Scroll
            </span>
            <div
              className="w-[1px] h-10"
              style={{
                background: "linear-gradient(to bottom, #378ADD, transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}