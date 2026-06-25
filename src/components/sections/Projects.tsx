// src/components/sections/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, BookOpen } from "lucide-react";

const featured = [
  {
    id: 1,
    name: "Brew & Co",
    description:
      "A modern coffee brand website with smooth animations, an elegant menu showcase, and a fully responsive layout built for a premium user experience.",
    tags: ["Next.js", "Framer Motion" , "POstgre SQL" , "Prisma"],
    image: "/images/brew-co2.png", // replace with your screenshot
    emoji: "☕",
    accent: "#378ADD",
    live: "https://brew-and-co-acyz-l1v0jmxri-patanai12876s-projects.vercel.app/",
    case: "#",
  },
  {
    id: 2,
    name: "FitPro",
    description:
      "A fitness platform focused on seamless UX, workout management, and progress tracking — built with performance and scalability in mind.",
    tags: ["Next.js", "TypeScript", "Mongo DB"],
    image: "/images/fitpro.png", // replace with your screenshot
    emoji: "💪",
    accent: "#185FA5",
    live: "https://fit-pro-frontend.vercel.app/",
    case: "#",
  },
];

const others = [
  {
    name: "TradeSync",
    description:
      "Trading analytics and journaling application for tracking performance and patterns.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/tradesync.png", // replace with your screenshot
    emoji: "📈",
    live: "https://trade-sync-seven.vercel.app/",
  },
  {
    name: "Ignisis Solutions",
    description:
      "Business website focused on services showcase and lead generation for a digital agency.",
    tags: ["Next.js", "Tailwind CSS" , "Resend"],
    image: "/images/ignisis.png", // replace with your screenshot
    emoji: "🏢",
    live: "https://ignisissolutions-phi.vercel.app/",
  },
];

function FeaturedCard({
  project,
  index,
  inView,
}: {
  project: (typeof featured)[0];
  index: number;
  inView: boolean;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group grid lg:grid-cols-2 rounded-3xl overflow-hidden"
      style={{
        background: "#FFFFFF",
        border: "1.5px solid rgba(55,138,221,0.13)",
        boxShadow: "0 8px 40px rgba(4,44,83,0.08)",
        minHeight: "540px",
      }}
    >
      {/* IMAGE SIDE */}
     <div
  className={`relative overflow-hidden flex items-center justify-center ${
    isEven ? "lg:order-1" : "lg:order-2"
  }`}
  style={{ minHeight: "400px", background: "#F0F6FF" }}
>
        {/* Actual screenshot — shows if image exists, else shows placeholder */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-[1.03]"
          onError={(e) => {
            // if image not found, show placeholder
            (e.target as HTMLImageElement).style.display = "none";
            const placeholder = (e.target as HTMLImageElement)
              .nextElementSibling as HTMLElement;
            if (placeholder) placeholder.style.display = "flex";
          }}
        />

        {/* Placeholder — hidden when image loads */}
        <div
          className="absolute inset-0 flex-col items-center justify-center gap-4"
          style={{
            display: "none",
            background: `linear-gradient(135deg, ${project.accent}12 0%, #E6F1FB 100%)`,
          }}
        >
          <span className="text-8xl">{project.emoji}</span>
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: project.accent, opacity: 0.5 }}
          >
            Add screenshot to /public/images/
          </span>
        </div>

        {/* Gradient overlay on image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isEven
              ? "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.15) 100%)"
              : "linear-gradient(to left, transparent 60%, rgba(255,255,255,0.15) 100%)",
          }}
        />

        {/* Featured badge on image */}
        <div className="absolute top-5 left-5">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.9)",
              color: project.accent,
              border: `1px solid ${project.accent}30`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: project.accent }}
            />
            Featured Project
          </span>
        </div>
      </div>

      {/* INFO SIDE */}
      <div
        className={`flex flex-col justify-center px-10 py-14 lg:px-14 ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <h3
          className="text-4xl font-extrabold tracking-tight mb-5 leading-tight"
          style={{ color: "#042C53" }}
        >
          {project.name}
        </h3>

        <p
          className="text-base leading-relaxed mb-8 font-medium"
          style={{ color: "#6B7280", maxWidth: "420px" }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-bold px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(55,138,221,0.08)",
                color: "#185FA5",
                border: "1px solid rgba(55,138,221,0.18)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
              boxShadow: "0 4px 18px rgba(55,138,221,0.3)",
            }}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>

          <a
            href={project.case}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-[1.04]"
            style={{
              background: "rgba(55,138,221,0.07)",
              border: "1.5px solid rgba(55,138,221,0.2)",
              color: "#185FA5",
            }}
            >
          
            <BookOpen size={15} />
            Case Study
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function OtherCard({
  project,
  index,
  inView,
}: {
  project: (typeof others)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.4 + index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: "#FFFFFF",
        border: "1.5px solid rgba(55,138,221,0.1)",
        boxShadow: "0 4px 24px rgba(4,44,83,0.06)",
        textDecoration: "none",
      }}
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
            const placeholder = (e.target as HTMLImageElement)
              .nextElementSibling as HTMLElement;
            if (placeholder) placeholder.style.display = "flex";
          }}
        />
        {/* Placeholder */}
        <div
          className="absolute inset-0 flex-col items-center justify-center gap-3"
          style={{
            display: "none",
            background: "linear-gradient(135deg, #E6F1FB 0%, #F7F9FC 100%)",
          }}
        >
          <span className="text-5xl">{project.emoji}</span>
          <span
            className="text-[10px] font-bold tracking-widest uppercase"
            style={{ color: "#378ADD", opacity: 0.5 }}
          >
            Add screenshot
          </span>
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "rgba(4,44,83,0.04)",
          }}
        />

        {/* External link icon on hover */}
        <div
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
          style={{
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 2px 12px rgba(4,44,83,0.1)",
          }}
        >
          <ExternalLink size={15} style={{ color: "#378ADD" }} />
        </div>
      </div>

      {/* Info area */}
      <div className="flex flex-col flex-1 p-7">
        <h3
          className="text-xl font-extrabold mb-3 tracking-tight"
          style={{ color: "#042C53" }}
        >
          {project.name}
        </h3>

        <p
          className="text-sm leading-relaxed mb-6 flex-1 font-medium"
          style={{ color: "#6B7280" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-bold px-3 py-1 rounded-full"
              style={{
                background: "rgba(55,138,221,0.07)",
                color: "#185FA5",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#F7F9FC" }}
    >
      {/* bg blob */}
      <div
        className="absolute top-40 right-[-120px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(55,138,221,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-40 left-[-120px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(24,95,165,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
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
              push the craft.
            </span>
          </h2>
        </motion.div>

        {/* Featured — full width, big, alternating */}
        <div className="flex flex-col gap-8 mb-24">
          {featured.map((project, i) => (
            <FeaturedCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* More projects label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-px flex-1" style={{ background: "rgba(55,138,221,0.15)" }} />
          <span
            className="text-xs font-bold tracking-[0.2em] uppercase"
            style={{ color: "#6B7280" }}
          >
            More Projects
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(55,138,221,0.15)" }} />
        </motion.div>

        {/* Other projects — 2 col grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {others.map((project, i) => (
            <OtherCard
              key={project.name}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}