"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const textBlockRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  // refs for every letter span
  const earthRefs = useRef<(HTMLSpanElement | null)[]>([])
  const fitnessRefs = useRef<(HTMLSpanElement | null)[]>([])

  const stableOnComplete = useCallback(() => onComplete(), [onComplete])

  useEffect(() => {
    const containerEl = containerRef.current
    const logoEl = logoRef.current
    const textEl = textBlockRef.current
    const taglineEl = taglineRef.current
    if (!containerEl || !logoEl || !textEl || !taglineEl) return

    const ff = "'Lato', sans-serif"

    // --- Set initial states via GSAP (no React state involved) ---
    gsap.set(containerEl, { opacity: 1 })
    gsap.set(textEl, { opacity: 1 }) // always visible container

    // All letters start hidden & offset
    const allLetterEls = [
      ...earthRefs.current,
      ...fitnessRefs.current,
    ].filter(Boolean) as HTMLSpanElement[]

    gsap.set(allLetterEls, { opacity: 0, x: 24, filter: "blur(6px)" })
    gsap.set(taglineEl, { opacity: 0, y: 10 })

    const tl = gsap.timeline()

    // Phase 1: Logo slides in from off-screen right
    tl.fromTo(
      logoEl,
      { x: "100vw", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.6,
        ease: "power3.out",
        force3D: true,
      }
    )

    // Phase 2: Letters animate in — started mid-logo-slide via position offset
    // EARTH letters
    earthRefs.current.forEach((el, i) => {
      if (!el) return
      tl.to(el, {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
      }, 0.75 + i * 0.16) // absolute position: starts at 0.75s
    })

    // FITNESS letters
    fitnessRefs.current.forEach((el, i) => {
      if (!el) return
      tl.to(el, {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
      }, 0.75 + 0.6 + i * 0.16) // starts after EARTH
    })

    // Phase 3: Tagline fades in after all letters done
    // Last FITNESS letter ends at: 0.75 + 0.6 + 6*0.16 + 0.6 = ~2.91s
    tl.to(taglineEl, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "easeOut",
    }, 3.1)

    // Hold
    tl.to({}, { duration: 1.2 })

    // Phase 4: Fade out everything
    tl.to(containerEl, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: stableOnComplete,
    })

    return () => { tl.kill() }
  }, [stableOnComplete])

  const ff = "'Lato', sans-serif"
  const fw = 900
  const bigFs = "clamp(3rem, 7vw, 6rem)"

  const BigChevrons = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden">
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.04 + i * 0.02, 0.14 + i * 0.03, 0.04 + i * 0.02] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: (3 - i) * 0.35, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 800 180"
            fill="none"
            style={{ width: "100vw", maxWidth: "900px", height: "auto", display: "block" }}
          >
            <polyline
              points="20,160 400,20 780,160"
              stroke="#dc2626"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )

  return (
    <AnimatePresence>
      <div
        ref={containerRef}
        className="fixed inset-0 z-50 overflow-hidden"
        style={{ backgroundColor: "#000", opacity: 0 }}
      >
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700;900&display=swap" rel="stylesheet" />

        {/* Mobile-only centering overrides */}
        <style>{`
          @media (max-width: 767px) {
            .intro-row { flex-wrap: wrap !important; justify-content: center !important; align-items: center !important; }
            .intro-text-block { align-items: center !important; }
            .intro-earth-line { justify-content: center !important; }
            .intro-fitness-line { justify-content: center !important; padding-left: 0 !important; }
            .intro-tagline { justify-content: center !important; }
          }
        `}</style>

        <BigChevrons />

        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(220,38,38,0.06) 0%, transparent 60%)"
        }} />

        {/* Centered logo + text */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="intro-row" style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>

            {/* Logo */}
            <img
              ref={logoRef}
              src="/images/atlas-logo.png"
              alt="Earth Fitness Logo"
              style={{
                width: "clamp(70px, 9vw, 110px)",
                height: "auto",
                objectFit: "contain",
                borderRadius: "4px",
                marginTop: "clamp(10px, 2vw, 22px)",
                opacity: 0,
                flexShrink: 0,
                willChange: "transform",
              }}
            />

            {/* Text block — always in DOM, letters controlled by GSAP */}
            <div
              ref={textBlockRef}
              className="intro-text-block"
              style={{ display: "flex", flexDirection: "column", gap: "0px" }}
            >
              {/* EARTH — always rendered */}
              <div className="intro-earth-line" style={{ display: "flex", alignItems: "baseline", lineHeight: 1 }}>
                {"EARTH".split("").map((l, i) => (
                  <span
                    key={`e-${i}`}
                    ref={el => { earthRefs.current[i] = el }}
                    style={{
                      fontFamily: ff,
                      fontSize: bigFs,
                      fontWeight: fw,
                      color: i === 0 ? "#dc2626" : "#e5e5e5",
                      display: "inline-block",
                      lineHeight: 1,
                      textShadow: i === 0 ? "0 0 18px rgba(220,38,38,0.35)" : "none",
                      willChange: "transform, opacity, filter",
                    }}
                  >
                    {l}
                  </span>
                ))}
              </div>

              {/* FITNESS — always rendered */}
              <div className="intro-fitness-line" style={{
                display: "flex",
                alignItems: "baseline",
                lineHeight: 1,
                paddingLeft: "clamp(10px, 1.5vw, 20px)",
                marginTop: "-6px",
              }}>
                {"FITNESS".split("").map((l, i) => (
                  <span
                    key={`f-${i}`}
                    ref={el => { fitnessRefs.current[i] = el }}
                    style={{
                      fontFamily: ff,
                      fontSize: bigFs,
                      fontWeight: fw,
                      color: "#e5e5e5",
                      display: "inline-block",
                      lineHeight: 1,
                      willChange: "transform, opacity, filter",
                    }}
                  >
                    {l}
                  </span>
                ))}
              </div>

              {/* Tagline — always rendered, hidden by GSAP */}
              <div
                ref={taglineRef}
                className="intro-tagline flex items-center mt-3"
                style={{ gap: "8px", opacity: 0 }}
              >
                <div style={{ width: "28px", height: "1px", background: "rgba(220,38,38,0.45)" }} />
                <span style={{
                  fontFamily: ff,
                  fontSize: "10px",
                  letterSpacing: "0.28em",
                  color: "rgba(255,255,255,0.28)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}>
                  Forge Your Strongest Self
                </span>
                <div style={{ width: "28px", height: "1px", background: "rgba(220,38,38,0.45)" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Floating dust */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div key={i}
              className="absolute rounded-full"
              style={{
                width: "1px", height: "1px",
                backgroundColor: "rgba(220,38,38,0.2)",
                left: `${42 + i * 5}%`, top: `${38 + i * 4}%`,
              }}
              animate={{ y: [-2, -40], opacity: [0, 0.2, 0] }}
              transition={{ duration: 5 + i * 0.4, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
            />
          ))}
        </div>
      </div>
    </AnimatePresence>
  )
}