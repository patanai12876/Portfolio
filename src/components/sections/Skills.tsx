// src/components/sections/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Monitor,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: <TrendingUp size={21} />,
    title: "Business Growth",
    description:
      "Strategy, consulting, business development, and growth planning to help you identify opportunities and move your business forward.",
    points: ["Growth Strategy", "Business Consulting", "Lead Generation"],
  },
  {
    number: "02",
    icon: <Monitor size={21} />,
    title: "Web & Technology",
    description:
      "High-quality websites, React and Next.js web applications, e-commerce platforms, and custom software solutions built around your business.",
    points: ["React", "Next.js", "Web Applications", "E-Commerce"],
  },
  {
    number: "03",
    icon: <Cloud size={21} />,
    title: "SaaS Products",
    description:
      "Scalable software-as-a-service products with secure architecture, subscription workflows, dashboards, and long-term growth in mind.",
    points: ["SaaS Development", "Subscription Systems", "Scalable Architecture"],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "#F7F9FC" }}
    >
      {/* Background elements */}
      <div
        className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(55,138,221,0.08) 0%, transparent 68%)",
        }}
      />

      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(24,95,165,0.05) 0%, transparent 68%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(#185FA5 1px, transparent 1px), linear-gradient(90deg, #185FA5 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="h-px w-10"
              style={{ background: "#378ADD" }}
            />

            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "#378ADD" }}
            >
              What I Do
            </span>
          </div>

          <h2
            className="text-[clamp(2rem,4vw,3.4rem)] font-bold tracking-tight leading-[1.08] mb-5"
            style={{ color: "#042C53" }}
          >
            Everything your business needs to{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              grow digitally.
            </span>
          </h2>

          <p
            className="max-w-2xl text-sm md:text-base leading-relaxed"
            style={{ color: "#475569" }}
          >
            From business strategy and web technology to SaaS products,
            I bring the right digital solutions together to help businesses
            build, grow, and scale.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              className="group relative overflow-hidden rounded-3xl p-7 md:p-8"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(55,138,221,0.11)",
                boxShadow: "0 4px 24px rgba(4,44,83,0.045)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(55,138,221,0.11) 0%, transparent 70%)",
                }}
              />

              {/* Top row */}
              <div className="relative flex items-center justify-between mb-8">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(55,138,221,0.08)",
                    color: "#185FA5",
                    border:
                      "1px solid rgba(55,138,221,0.14)",
                  }}
                >
                  {service.icon}
                </div>

                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "rgba(24,95,165,0.4)" }}
                >
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3
                    className="text-xl font-bold tracking-tight"
                    style={{ color: "#042C53" }}
                  >
                    {service.title}
                  </h3>

                  <ArrowUpRight
                    size={19}
                    className="flex-shrink-0 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                    style={{ color: "#378ADD" }}
                  />
                </div>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "#475569" }}
                >
                  {service.description}
                </p>

                {/* Service points */}
                <div className="flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <span
                      key={point}
                      className="px-3 py-1.5 rounded-lg text-[11px] font-semibold"
                      style={{
                        background: "#F7F9FC",
                        color: "#185FA5",
                        border:
                          "1px solid rgba(55,138,221,0.1)",
                      }}
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-7 right-7 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{
                  background:
                    "linear-gradient(90deg, #378ADD, transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.55,
          }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 px-6 py-5 rounded-2xl"
          style={{
            background: "rgba(55,138,221,0.045)",
            border: "1px solid rgba(55,138,221,0.1)",
          }}
        >
          <div>
            <p
              className="text-sm font-bold mb-1"
              style={{ color: "#042C53" }}
            >
              One partner. Multiple growth solutions.
            </p>

            <p
              className="text-xs"
              style={{ color: "#475569" }}
            >
              Strategy, technology and SaaS solutions — working together.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-bold whitespace-nowrap"
            style={{ color: "#185FA5" }}
          >
            Discuss Your Business
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}