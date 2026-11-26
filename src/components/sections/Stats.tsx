// src/components/sections/Stats.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  {
    value: 100,
    suffix: "%",
    label: "Responsive",
    description: "Layouts built for every screen",
  },
  {
    value: null,
    text: "Mobile",
    label: "Mobile Friendly",
    description: "Smooth experience on every device",
  },
  {
    value: null,
    text: "React",
    label: "Modern Development",
    description: "React · Next.js · TypeScript",
  },
  {
    value: null,
    text: "Fast",
    label: "Performance Focused",
    description: "Clean, fast and scalable builds",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      ref={ref}
      className="relative py-16 overflow-hidden"
      style={{ background: "#F7F9FC" }}
    >
      {/* subtle divider top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "rgba(55,138,221,0.1)" }}
      />

      {/* subtle divider bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "rgba(55,138,221,0.1)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl"
          style={{ background: "rgba(55,138,221,0.08)" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col items-center justify-center text-center px-6 py-10 cursor-default"
              style={{ background: "#F7F9FC" }}
            >
              {/* hover bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 60%, rgba(55,138,221,0.06) 0%, transparent 70%)",
                }}
              />

              {/* value */}
              <div
                className="text-4xl font-bold leading-none mb-2 tracking-tight"
                style={{
                  background:
                    "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value !== null ? (
                  inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      delay={i * 0.1}
                      suffix={stat.suffix ?? ""}
                    />
                  ) : (
                    <span>
                      0{stat.suffix}
                    </span>
                  )
                ) : (
                  stat.text
                )}
              </div>

              {/* label */}
              <div
                className="text-sm font-semibold mb-1"
                style={{ color: "#042C53" }}
              >
                {stat.label}
              </div>

              {/* description */}
              <div
                className="text-xs font-normal leading-relaxed"
                style={{ color: "#475569" }}
              >
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}