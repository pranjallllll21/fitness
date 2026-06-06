"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#060606" }}
    >
      {/* Background "EARTH FITNESS" watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-[1]">
        <span
          className="text-[18vw] md:text-[12vw] font-black tracking-wider select-none whitespace-nowrap"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(220, 38, 38, 0.1)",
            opacity: 0.6,
          }}
        >
          EARTH FITNESS
        </span>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src="/images/herobg.jpg"
            alt="Elite athlete training"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            style={{ objectPosition: "55% center" }}
          />
          {/* Red-tinted overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #060606 0%, rgba(6,6,6,0.7) 40%, rgba(6,6,6,0.2) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,6,6,0.5) 0%, transparent 30%)" }} />
          {/* Subtle red vignette */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(220,38,38,0.03) 100%)" }} />
        </div>
      </div>

      {/* Centered Tagline */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-8 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-center"
        >
          {/* Logo badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <img
              src="/images/logo.png"
              alt="Earth Fitness"
              className="w-20 h-20 object-contain rounded-full"
              style={{
                filter: "brightness(1.05) contrast(1.05)",
              }}
            />
          </motion.div>

          <h1 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-snug tracking-wide">
            Conquer Every Rep. Dominate{" "}
            <br className="sm:hidden" />
            Every{" "}
            <span
              className="font-black"
              style={{
                color: "#dc2626",
                textShadow: "0 0 12px rgba(220,38,38,0.3)",
              }}
            >
              SET.
            </span>
          </h1>



          {/* Mirror reflection */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative mt-1 h-10 sm:h-14 overflow-hidden"
          >
            <div
              className="absolute inset-x-0 top-0"
              style={{
                transform: "scaleY(-1)",
                maskImage: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)",
              }}
            >
              <p className="text-[1.3rem] sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide text-white/50">
                Conquer Every Rep. Dominate Every{" "}
                <span style={{ color: "rgba(220,38,38,0.5)" }}>SET.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-8 mt-auto pb-12 sm:pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="#membership"
            className="w-full sm:w-auto inline-block px-8 py-2.5 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-lg transition-all duration-300 text-center"
            style={{
              background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
              boxShadow: "0 4px 14px rgba(220,38,38,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(220,38,38,0.5)"
              ;(e.currentTarget as HTMLElement).style.transform = "scale(1.04)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(220,38,38,0.3)"
              ;(e.currentTarget as HTMLElement).style.transform = "scale(1)"
            }}
          >
            Join Earth Fitness
          </Link>
          <Link
            href="#programs"
            className="w-full sm:w-auto inline-block px-8 py-2.5 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-lg transition-all duration-300 text-center"
            style={{
              border: "2px solid rgba(220,38,38,0.4)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.8)"
              ;(e.currentTarget as HTMLElement).style.color = "#dc2626"
              ;(e.currentTarget as HTMLElement).style.transform = "scale(1.04)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.4)"
              ;(e.currentTarget as HTMLElement).style.color = "#fff"
              ;(e.currentTarget as HTMLElement).style.transform = "scale(1)"
            }}
          >
            Explore Programs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
