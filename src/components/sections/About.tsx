// src/components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Lightbulb,
  Target,
} from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <TrendingUp size={18} />,
      title: "Growth Focused",
      description:
        "Every solution is designed with one goal in mind — helping your business grow, compete, and scale.",
    },
    {
      icon: <Lightbulb size={18} />,
      title: "Smart Solutions",
      description:
        "Combining business strategy, web technology, and SaaS development to solve real business challenges.",
    },
    {
      icon: <Target size={18} />,
      title: "Results Driven",
      description:
        "From strategy to execution, every project is focused on creating measurable value for your business.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "#EBF4FF" }}
    >
      {/* blob */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(55,138,221,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-px w-10"
                style={{ background: "#378ADD" }}
              />

              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: "#378ADD" }}
              >
                About
              </span>
            </div>

            <h2
              className="text-[clamp(1.9rem,3.8vw,3rem)] font-bold tracking-tight leading-tight mb-6"
              style={{ color: "#042C53" }}
            >
              Helping businesses turn{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ideas into growth.
              </span>
            </h2>

            <div
              className="flex flex-col gap-4 text-sm leading-relaxed mb-8"
              style={{ color: "#475569" }}
            >
              <p>
                I help businesses grow by combining strategic thinking,
                technology, and SaaS development. From building a strong
                digital presence to developing scalable products, I focus on
                solving real business challenges.
              </p>

              <p>
                Whether you need a high-converting website, a complete
                web application, or a SaaS product, I work closely with you
                to turn ideas into practical, scalable solutions.
              </p>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                boxShadow: "0 4px 16px rgba(55,138,221,0.28)",
              }}
            >
              Let's Work Together
            </a>
          </motion.div>

          {/* RIGHT — value cards */}
          <div className="flex flex-col gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  x: 4,
                  transition: { duration: 0.2 },
                }}
                className="group flex items-start gap-4 p-5 rounded-2xl cursor-default"
                style={{
                  background: "#FFFFFF",
                  border: "1.5px solid rgba(55,138,221,0.1)",
                  boxShadow: "0 2px 12px rgba(4,44,83,0.04)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{
                    background: "rgba(55,138,221,0.08)",
                    color: "#378ADD",
                    border: "1px solid rgba(55,138,221,0.15)",
                  }}
                >
                  {v.icon}
                </div>

                <div>
                  <h4
                    className="text-sm font-bold mb-1"
                    style={{ color: "#042C53" }}
                  >
                    {v.title}
                  </h4>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#475569" }}
                  >
                    {v.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl mt-1"
              style={{
                background: "rgba(55,138,221,0.06)",
                border: "1.5px solid rgba(55,138,221,0.14)",
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse"
                style={{ background: "#22c55e" }}
              />

              <p
                className="text-sm font-semibold"
                style={{ color: "#042C53" }}
              >
                Currently available for new projects
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}