"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote:
      "Earth Fitness transformed not just my body, but my entire mindset. The discipline I built here carries into everything I do.",
  },
  {
    name: "Maria Santos",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote:
      "The trainers here are exceptional. They pushed me beyond what I thought possible and helped me achieve goals I never imagined.",
  },
  {
    name: "James Chen",
    role: "Professional Athlete",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    quote:
      "As a pro athlete, I need world-class facilities and coaching. Earth Fitness delivers on every level, every single day.",
  },
  {
    name: "Sarah Williams",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote:
      "The community here is incredible. Everyone pushes each other, and the energy at Earth Fitness is always electric.",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "#111111" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(220,38,38,0.04) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.35em] uppercase font-medium mb-4" style={{ color: "#dc2626" }}>
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white text-balance">
            What Our Members{" "}
            <span style={{ color: "#dc2626", textShadow: "0 0 20px rgba(220,38,38,0.3)" }}>
              Say
            </span>
          </h2>
        </motion.div>

        {/* Testimonial slider */}
        <div className="relative">
          <div
            className="rounded-3xl p-5 sm:p-8 md:p-12 min-h-[300px] flex items-center"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(220,38,38,0.15)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 40px rgba(220,38,38,0.05), 0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center w-full"
              >
                {/* Quote icon */}
                <div className="flex justify-center mb-6">
                  <Quote className="w-12 h-12" style={{ color: "#dc2626", opacity: 0.8 }} />
                </div>

                {/* Quote text */}
                <p
                  className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-pretty"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover"
                    style={{
                      border: "2px solid #dc2626",
                      boxShadow: "0 0 12px rgba(220,38,38,0.4)",
                    }}
                  />
                  <div className="text-left">
                    <p className="font-bold text-white">{testimonials[current].name}</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.02)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.5)"
                ;(e.currentTarget as HTMLElement).style.background = "rgba(220,38,38,0.08)"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"
                ;(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrent(index)
                  }}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: index === current ? "2rem" : "0.5rem",
                    background: index === current ? "#dc2626" : "rgba(255,255,255,0.2)",
                    boxShadow: index === current ? "0 0 8px rgba(220,38,38,0.5)" : "none",
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.02)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.5)"
                ;(e.currentTarget as HTMLElement).style.background = "rgba(220,38,38,0.08)"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"
                ;(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
