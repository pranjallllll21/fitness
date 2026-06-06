"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const transformations = [
  {
    name: "Michael R.",
    before: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop",
    weightLoss: "25kg",
    muscleGain: "+15kg lean",
    months: 8,
    quote: "Earth Fitness gave me the strength I never knew I had.",
  },
  {
    name: "Jennifer L.",
    before: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop",
    weightLoss: "18kg",
    muscleGain: "+8kg lean",
    months: 6,
    quote: "The trainers here pushed me beyond every limit.",
  },
  {
    name: "David K.",
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=400&h=500&fit=crop",
    weightLoss: "30kg",
    muscleGain: "+20kg lean",
    months: 12,
    quote: "From overweight to competition ready. Earth Fitness delivered.",
  },
]

function TransformationCard({
  transformation,
  index,
}: {
  transformation: (typeof transformations)[0]
  index: number
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX)
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.3)"
          ;(e.currentTarget as HTMLElement).style.boxShadow = "0 10px 50px rgba(220,38,38,0.1)"
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"
          ;(e.currentTarget as HTMLElement).style.boxShadow = "0 10px 40px rgba(0,0,0,0.3)"
        }}
      >
        {/* Image comparison slider */}
        <div
          ref={containerRef}
          className="relative h-80 cursor-ew-resize select-none"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* After image (background) */}
          <img
            src={transformation.after}
            alt="After transformation"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={transformation.before}
              alt="Before transformation"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: `${100 / (sliderPosition / 100)}%` }}
            />
          </div>

          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-[2px]"
            style={{
              left: `${sliderPosition}%`,
              transform: "translateX(-50%)",
              background: "#dc2626",
              boxShadow: "0 0 12px rgba(220,38,38,0.7)",
            }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: "#dc2626",
                boxShadow: "0 0 20px rgba(220,38,38,0.5)",
              }}
            >
              <div className="flex gap-1">
                <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent" style={{ borderRightColor: "#fff" }} />
                <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent" style={{ borderLeftColor: "#fff" }} />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white"
            style={{ background: "rgba(6,6,6,0.8)" }}
          >
            Before
          </div>
          <div
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white"
            style={{ background: "rgba(220,38,38,0.85)" }}
          >
            After
          </div>
        </div>

        {/* Stats */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white">{transformation.name}</h3>
          <p className="text-sm mt-1 italic" style={{ color: "rgba(255,255,255,0.45)" }}>
            &ldquo;{transformation.quote}&rdquo;
          </p>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: "#dc2626" }}>{transformation.weightLoss}</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Weight Lost</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{transformation.muscleGain}</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Muscle Gain</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{transformation.months}</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Months</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function TransformationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="transformation" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #111111 0%, #0a0a0a 50%, #111111 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, rgba(220,38,38,0.05) 0%, transparent 60%)",
        }}
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
            Real Results
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white text-balance">
            Transformations That{" "}
            <span style={{ color: "#dc2626", textShadow: "0 0 20px rgba(220,38,38,0.3)" }}>
              Inspire
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Drag the slider to witness the incredible journeys of Earth Fitness members
          </p>
        </motion.div>

        {/* Transformation cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {transformations.map((transformation, index) => (
            <TransformationCard
              key={transformation.name}
              transformation={transformation}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
