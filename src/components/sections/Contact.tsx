// src/components/sections/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, CheckCircle, Mail } from "lucide-react";

const socials = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    handle: "zainabfatyma38@gmail.com",
    href: "mailto:zainabfatyma38@gmail.com",
  },
];

const projectTypes = [
  "Business Growth",
  "Website / Web App",
  "SaaS Product",
  "Other",
];

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSent(true);

      setForm({
        name: "",
        email: "",
        type: "",
        message: "",
      });
    }
  };

  const inputStyle = {
    background: "#FFFFFF",
    border: "1.5px solid rgba(55,138,221,0.15)",
    borderRadius: "12px",
    color: "#042C53",
    fontSize: "0.875rem",
    fontWeight: 500,
    outline: "none",
    width: "100%",
    padding: "0.85rem 1rem",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{ background: "#F7F9FC" }}
    >
      {/* Background blobs */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(55,138,221,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
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
          className="mb-14"
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
              Get In Touch
            </span>
          </div>

          <h2
            className="text-[clamp(1.9rem,3.8vw,3rem)] font-bold tracking-tight leading-tight"
            style={{ color: "#042C53" }}
          >
            Let's talk about your{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              business.
            </span>
          </h2>

          <p
            className="mt-4 max-w-2xl text-sm leading-relaxed"
            style={{ color: "#475569" }}
          >
            Have a business idea, growth challenge, or digital project in
            mind? Tell me what you're working on and let's explore how I
            can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* LEFT — FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-3 rounded-2xl p-8"
            style={{
              background: "#FFFFFF",
              border: "1.5px solid rgba(55,138,221,0.12)",
              boxShadow: "0 4px 24px rgba(4,44,83,0.06)",
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <CheckCircle
                  size={48}
                  style={{ color: "#22c55e" }}
                />

                <h3
                  className="text-xl font-bold"
                  style={{ color: "#042C53" }}
                >
                  Thanks for reaching out!
                </h3>

                <p
                  className="text-sm max-w-sm"
                  style={{ color: "#475569" }}
                >
                  Your message has been received. I'll get back to you
                  as soon as possible.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-semibold"
                  style={{
                    color: "#378ADD",
                    cursor: "pointer",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">

                <h3
                  className="text-base font-bold mb-1"
                  style={{ color: "#042C53" }}
                >
                  Tell me about your project
                </h3>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold tracking-wide uppercase"
                      style={{ color: "#475569" }}
                    >
                      Name
                    </label>

                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "#378ADD")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor =
                          "rgba(55,138,221,0.15)")
                      }
                    />
                  </div>

                  
                  

                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold tracking-wide uppercase"
                    style={{ color: "#475569" }}
                  >
                    What can I help with?
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            type,
                          }))
                        }
                        className="px-4 py-2 rounded-full text-xs font-bold transition-all duration-200"
                        style={{
                          background:
                            form.type === type
                              ? "linear-gradient(135deg, #378ADD, #185FA5)"
                              : "rgba(55,138,221,0.07)",
                          color:
                            form.type === type
                              ? "#FFFFFF"
                              : "#185FA5",
                          border:
                            form.type === type
                              ? "1.5px solid transparent"
                              : "1.5px solid rgba(55,138,221,0.18)",
                          cursor: "pointer",
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold tracking-wide uppercase"
                    style={{ color: "#475569" }}
                  >
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your business, goals, or project..."
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "none",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#378ADD")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor =
                        "rgba(55,138,221,0.15)")
                    }
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                    boxShadow:
                      "0 4px 16px rgba(55,138,221,0.28)",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  <Send size={15} />
                  Start a Conversation
                </button>

              </div>
            )}
          </motion.div>

          {/* RIGHT — INFO */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-2 flex flex-col gap-4"
          >

            {/* Availability */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "#FFFFFF",
                border:
                  "1.5px solid rgba(55,138,221,0.12)",
                boxShadow:
                  "0 2px 12px rgba(4,44,83,0.05)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">

                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ background: "#22c55e" }}
                />

                <span
                  className="text-xs font-bold tracking-wide uppercase"
                  style={{ color: "#22c55e" }}
                >
                  Available for New Projects
                </span>

              </div>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#475569" }}
              >
                Whether you need business guidance, a digital solution,
                a SaaS product, or a complete growth strategy, let's discuss
                your goals.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:zainabfatyma38@gmail.com"
              className="rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "#FFFFFF",
                border:
                  "1.5px solid rgba(55,138,221,0.12)",
                boxShadow:
                  "0 2px 12px rgba(4,44,83,0.05)",
                textDecoration: "none",
              }}
            >
              <div className="flex items-center gap-3">

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(55,138,221,0.08)",
                    color: "#378ADD",
                  }}
                >
                  <Mail size={18} />
                </div>

                <div>
                  <div
                    className="text-xs font-bold tracking-wide uppercase mb-1"
                    style={{ color: "#475569" }}
                  >
                    Email
                  </div>

                  <div
                    className="text-sm font-bold"
                    style={{ color: "#042C53" }}
                  >
                    zainabfatyma38@gmail.com
                  </div>
                </div>

              </div>
            </a>

            {/* Social Links */}
            <div
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{
                background: "#FFFFFF",
                border:
                  "1.5px solid rgba(55,138,221,0.12)",
                boxShadow:
                  "0 2px 12px rgba(4,44,83,0.05)",
              }}
            >
              <h4
                className="text-xs font-bold tracking-[0.15em] uppercase mb-1"
                style={{ color: "#475569" }}
              >
                Connect With Me
              </h4>

              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:translate-x-1"
                  style={{
                    background:
                      "rgba(55,138,221,0.04)",
                    border:
                      "1px solid rgba(55,138,221,0.1)",
                    textDecoration: "none",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "rgba(55,138,221,0.08)",
                      color: "#378ADD",
                    }}
                  >
                    {typeof s.icon === "string" ? (
                      <span
                        className="text-xs font-extrabold"
                        style={{
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {s.icon}
                      </span>
                    ) : (
                      s.icon
                    )}
                  </div>

                  {/* Text */}
                  <div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "#042C53" }}
                    >
                      {s.label}
                    </div>

                    <div
                      className="text-xs"
                      style={{ color: "#475569" }}
                    >
                      {s.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}