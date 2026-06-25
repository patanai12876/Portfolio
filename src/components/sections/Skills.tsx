// src/components/sections/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = [
  {
    label: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    label: "Database",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    label: "Design",
    skills: ["Figma", "Canva"],
  },
];

const services = [
  {
    
    title: "Business Websites",
    description:
      "Modern websites designed to build credibility, attract visitors, and generate leads for your business.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    color: "#378ADD",
  },
  {
    
    title: "Web Applications",
    description:
      "Custom web apps focused on usability, scalability, and performance — built for real users.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#185FA5",
  },
  {
    
    title: "Responsive Design",
    description:
      "Pixel-perfect experiences optimized for every screen — desktop, tablet, and mobile.",
    tags: ["CSS", "Tailwind CSS", "TypeScript"],
    color: "#378ADD",
  },
  {
  
    title: "Performance First",
    description:
      "Fast-loading, SEO-friendly solutions built with modern best practices and clean architecture.",
    tags: ["Next.js", "Vercel", "Optimization"],
    color: "#185FA5",
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-18 overflow-hidden"
      style={{ background: "#F7F9FC" }}
    >
      {/* bg blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(55,138,221,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(24,95,165,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: "#378ADD" }} />
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "#378ADD" }}
            >
              Capabilities
            </span>
          </div>
          <h2
            className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight leading-tight"
            style={{ color: "#042C53" }}
          >
            Skills &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              What I Build
            </span>
          </h2>
        </motion.div>

        {/* Two col */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — skill pills */}
          <div className="flex flex-col gap-8">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: ci * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(55,138,221,0.08)",
                      color: "#185FA5",
                      border: "1px solid rgba(55,138,221,0.18)",
                    }}
                  >
                    {cat.label}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ background: "rgba(55,138,221,0.1)" }}
                  />
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.35,
                        delay: ci * 0.08 + si * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{
                        y: -2,
                        boxShadow: "0 6px 20px rgba(55,138,221,0.15)",
                        transition: { duration: 0.15 },
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold cursor-default"
                      style={{
                        background: "#FFFFFF",
                        border: "1.5px solid rgba(55,138,221,0.1)",
                        color: "#042C53",
                        boxShadow: "0 1px 8px rgba(4,44,83,0.04)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#378ADD" }}
                      />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — What I Build cards */}
          <div className="flex flex-col gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  x: 4,
                  transition: { duration: 0.2 },
                }}
                className="group relative rounded-2xl p-6 overflow-hidden cursor-default"
                style={{
                  background: "#FFFFFF",
                  border: "1.5px solid rgba(55,138,221,0.1)",
                  boxShadow: "0 2px 16px rgba(4,44,83,0.05)",
                }}
              >
                {/* Hover left accent bar */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to bottom, ${service.color}, transparent)`,
                  }}
                />

                {/* Hover bg glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 0% 50%, ${service.color}08 0%, transparent 70%)`,
                  }}
                />

                <div className="flex items-start gap-4 relative z-10">
                  {/* Icon box */}
                

                  <div className="flex-1 min-w-0">
                    <h4
                      className="text-base font-bold mb-1.5 tracking-tight"
                      style={{ color: "#042C53" }}
                    >
                      {service.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{ color: "#6B7280" }}
                    >
                      {service.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                          style={{
                            background: `${service.color}0f`,
                            color: service.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}