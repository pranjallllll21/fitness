"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Dumbbell, Flame, Heart, Zap, Target, Timer, Users } from "lucide-react"

const programs = [
  {
    title: "Strength Training",
    description: "Build raw power and muscle mass with proven techniques",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
  },
  {
    title: "Cardio",
    description: "Boost endurance and cardiovascular health",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=400&fit=crop",
  },
  {
    title: "Fat Loss",
    description: "Transform your body with targeted fat burning",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
  },
  {
    title: "Muscle Building",
    description: "Sculpt and define every muscle group",
    icon: Target,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
  },
  {
    title: "Functional Training",
    description: "Train for real-world strength and mobility",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop",
  },
  {
    title: "HIIT",
    description: "Maximum results in minimum time",
    icon: Timer,
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=600&h=400&fit=crop",
  },
  {
    title: "Personal Coaching",
    description: "One-on-one guidance from elite trainers",
    icon: Users,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
  },
]

export function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="programs" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #111111 0%, #0a0a0a 50%, #111111 100%)",
        }}
      />
      {/* Red glow accent */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgba(220,38,38,0.05)" }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.35em] uppercase font-medium mb-4" style={{ color: "#dc2626" }}>
            Our Programs
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white text-balance">
            Choose Your Path To{" "}
            <span style={{ color: "#dc2626", textShadow: "0 0 20px rgba(220,38,38,0.3)" }}>
              Greatness
            </span>
          </h2>
        </motion.div>

        {/* Programs carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-72 snap-center"
              >
                <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
                  {/* Image */}
                  <img
                    src={program.image}
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.5) 50%, transparent 100%)",
                    }}
                  />

                  {/* Red overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: "rgba(220,38,38,0.08)" }}
                  />

                  {/* Hover glow border */}
                  <div
                    className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-red-600/50 transition-all duration-300"
                    style={{
                      boxShadow: "inset 0 0 0 0 transparent",
                    }}
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="p-2 rounded-lg transition-all duration-300"
                        style={{
                          background: "rgba(220,38,38,0.15)",
                          border: "1px solid rgba(220,38,38,0.3)",
                        }}
                      >
                        <program.icon className="w-5 h-5 group-hover:text-red-400 transition-colors" style={{ color: "#dc2626" }} />
                      </div>
                      <h3
                        className="text-xl font-bold text-white transition-colors duration-300"
                        style={{ color: "#fff" }}
                      >
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-sm transition-colors duration-300" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll fade indicators */}
          <div
            className="absolute left-0 top-0 bottom-8 w-20 pointer-events-none"
            style={{ background: "linear-gradient(to right, #111111, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-8 w-20 pointer-events-none"
            style={{ background: "linear-gradient(to left, #111111, transparent)" }}
          />
        </div>
      </div>
    </section>
  )
}
