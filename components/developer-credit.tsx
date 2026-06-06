"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function DeveloperCredit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const skills = [
    "Web Design",
    "Frontend Dev",
    "Next.js",
    "UI / UX",
    "Branding",
    "SEO",
    "Responsive Design",
    "Performance",
  ]

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{ background: "#060606" }}
    >
      {/* Top divider line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.6), rgba(220,38,38,0.6), transparent)",
          boxShadow: "0 0 18px rgba(220,38,38,0.2)",
        }}
      />

      {/* Subtle red glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgba(220,38,38,0.03)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs tracking-[0.4em] uppercase font-semibold mb-3"
          style={{ color: "#dc2626" }}
        >
          Website Development
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-center text-3xl md:text-4xl font-black text-white mb-10 tracking-tight"
        >
          Built By{" "}
          <span style={{ color: "#dc2626", textShadow: "0 0 20px rgba(220,38,38,0.35)" }}>
            A Professional
          </span>
        </motion.h2>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex flex-col md:flex-row overflow-hidden"
          style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "4px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Red left accent bar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{ background: "linear-gradient(180deg, #dc2626, #991b1b)" }}
          />

          {/* ── LEFT: Bio Panel ── */}
          <div
            className="flex-1 px-8 md:px-10 py-10 md:py-12"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* Avatar + name row — centered on mobile */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 mb-6 text-center md:text-left">
              <div
                className="w-14 h-14 rounded-sm flex items-center justify-center font-black text-xl text-white flex-shrink-0 mx-auto md:mx-0"
                style={{
                  background: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
                  boxShadow: "0 4px 16px rgba(220,38,38,0.3)",
                }}
              >
                MS
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">Mohammed Shafiq Shaikh</p>
                <p
                  className="text-xs tracking-[0.2em] uppercase mt-0.5"
                  style={{ color: "#dc2626" }}
                >
                  Full-Stack Web Developer
                </p>
              </div>
            </div>

            {/* Bio — centered on mobile */}
            <p
              className="text-sm leading-relaxed mb-8 text-center md:text-left"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
             I design and build high-performance products and websites/app for brands,cafe's, gyms, and bussiness's. Every pixel is intentional; every interaction is engineered to drive results. Visit the portfolio to Know More.
            </p>

            {/* Skill tags — centered on mobile */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1.5"
                  style={{
                    background: "rgba(220,38,38,0.08)",
                    border: "1px solid rgba(220,38,38,0.25)",
                    borderRadius: "2px",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Contact Panel ── */}
          <div className="w-full md:w-72 px-8 md:px-10 py-10 md:py-12 flex flex-col justify-between gap-8">
            {/* Contact details */}
            <div className="space-y-5">
              <p
                className="text-[10px] tracking-[0.35em] uppercase font-semibold mb-4 text-center md:text-left"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Contact
              </p>

              {/* Email */}
              <a
                href="mailto:mdshafiqshaikh10@gmail.com"
                className="flex items-center gap-3 justify-center md:justify-start group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(220,38,38,0.1)",
                    border: "1px solid rgba(220,38,38,0.2)",
                    borderRadius: "2px",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <span
                  className="text-sm transition-colors duration-200 break-all"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#dc2626" }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)" }}
                >
                  mdshafiqshaikh10@gmail.com
                </span>
              </a>

              {/* Phone / WhatsApp */}
              <a
                href="tel:+917758882887"
                className="flex items-center gap-3 justify-center md:justify-start"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(220,38,38,0.1)",
                    border: "1px solid rgba(220,38,38,0.2)",
                    borderRadius: "2px",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <span
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#dc2626" }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)" }}
                >
                  +91 77588 82887
                </span>
              </a>

              {/* Portfolio */}
              <a
                href="https://mohammed-shafiq-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 justify-center md:justify-start"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(220,38,38,0.1)",
                    border: "1px solid rgba(220,38,38,0.2)",
                    borderRadius: "2px",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                </div>
                <span
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#dc2626" }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)" }}
                >
                  mohammed-shafiq-portfolio.vercel.app
                </span>
              </a>
            </div>

            {/* CTA button */}
            <a
              href="mailto:mdshafiqshaikh10@gmail.com?subject=I want a website like Earth Fitness"
              className="block w-full py-3.5 text-center font-black text-sm tracking-[0.15em] uppercase transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
                color: "#fff",
                borderRadius: "2px",
                boxShadow: "0 4px 20px rgba(220,38,38,0.3)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(220,38,38,0.5)"
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(220,38,38,0.3)"
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
              }}
            >
              Start Your Project
            </a>
          </div>
        </motion.div>

        {/* Bottom availability strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 flex flex-col items-center gap-3 px-5 py-4 md:flex-row md:justify-between"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "2px",
          }}
        >
          <p className="text-xs text-center md:text-left" style={{ color: "rgba(255,255,255,0.35)" }}>
            Want a website like this for your brand?{" "}
            <span style={{ color: "rgba(255,255,255,0.55)" }}>
              Get in touch — let&apos;s build something powerful together.
            </span>
          </p>
          <div
            className="flex items-center gap-2 flex-shrink-0 px-4 py-1.5"
            style={{
              background: "rgba(220,38,38,0.1)",
              border: "1px solid rgba(220,38,38,0.3)",
              borderRadius: "2px",
            }}
          >
            {/* Pulsing dot */}
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "#dc2626" }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ background: "#dc2626" }}
              />
            </span>
            <span
              className="text-[10px] tracking-[0.25em] uppercase font-bold"
              style={{ color: "#dc2626" }}
            >
              Available for Projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
