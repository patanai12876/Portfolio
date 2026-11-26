"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Char & Ember",
    category: "Web Development",
    description:
      "A fast-food website where customers can browse menu items and place orders directly through WhatsApp.",
    image: "/images/charember.png",
    live: "https://char-ember.vercel.app/",
  },
  {
    name: "E-Bikes",
    category: "Web Development",
    description:
      "An electric vehicle website for exploring available bikes, viewing specifications, and finding dealership opportunities.",
    image: "/images/e-bikes.png",
    live: "https://e-bikes-gamma.vercel.app/",
  },
  {
    name: "AS Digital",
    category: "Web Development",
    description:
      "A digital services and professional training website focused on helping businesses and learners grow.",
    image: "/images/ASdigital.png",
    live: "https://as-digital-umcg.vercel.app/",
  },
  {
    name: "Brew & Co",
    category: "Web Development",
    description:
      "An online coffee ordering platform where customers can explore the menu and place an order easily.",
    image: "/images/brew.png",
    live: "https://brew-and-co-acyz.vercel.app/",
  },
  {
    name: "FitPro",
    category: "Web Development",
    description:
      "A fitness website presenting training, trainers, memberships, and gym facilities.",
    image: "/images/fitpro.png",
    live: "https://fit-pro-frontend.vercel.app/",
  },
  {
    name: "Smile Care",
    category: "Web Development",
    description:
      "A patient-friendly dental clinic website with treatment information and appointment booking.",
    image: "/images/smilecare.png",
    live: "https://dental-clinic-lyart-nu.vercel.app/",
  },
  {
    name: "TradeSync",
    category: "Web Development",
    description:
      "A copy-trading platform interface for exploring traders, market activity, and portfolio information.",
    image: "/images/tradesync.png",
    live: "https://trade-sync-seven.vercel.app/",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "#F7F9FC" }}
    >
      <div
        className="absolute top-40 right-[-120px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(55,138,221,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "#378ADD" }} />
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "#378ADD" }}
            >
              Selected Work
            </span>
          </div>
          <h2
            className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold tracking-tight leading-[1.05]"
            style={{ color: "#042C53" }}
          >
            Projects that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              showcase my work.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex h-full min-h-[620px] flex-col overflow-hidden rounded-3xl"
              style={{
                background: "#FFFFFF",
                border: "1.5px solid rgba(55,138,221,0.1)",
                boxShadow: "0 4px 24px rgba(4,44,83,0.06)",
                textDecoration: "none",
              }}
            >
              <div
                className="relative h-[300px] flex-shrink-0 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #E6F1FB 0%, #F7F9FC 100%)",
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-5xl font-black"
                      style={{ color: "rgba(24,95,165,0.12)" }}
                    >
                      {project.name.charAt(0)}
                    </span>
                  </div>
                )}

                <div
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: "0 2px 12px rgba(4,44,83,0.1)",
                  }}
                >
                  <ExternalLink size={15} style={{ color: "#378ADD" }} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <span
                  className="mb-3 text-sm font-bold"
                  style={{ color: "#378ADD" }}
                >
                  {project.category}
                </span>
                <h3
                  className="mb-3 text-xl font-extrabold tracking-tight"
                  style={{ color: "#042C53" }}
                >
                  {project.name}
                </h3>
                <p
                  className="mb-7 text-sm leading-relaxed"
                  style={{ color: "#475569" }}
                >
                  {project.description}
                </p>
                <div className="mt-auto">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all duration-300 group-hover:scale-[1.03]"
                    style={{
                      background:
                        "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                      boxShadow: "0 4px 18px rgba(55,138,221,0.25)",
                    }}
                  >
                    <ExternalLink size={15} />
                    Visit Live Site
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
