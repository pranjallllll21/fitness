"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Scale, Ruler, Calendar, User } from "lucide-react"

type BMICategory = "Underweight" | "Normal" | "Overweight" | "Obese"

interface BMIResult {
  value: number
  category: BMICategory
}

const getCategoryColor = (category: BMICategory) => {
  switch (category) {
    case "Underweight":
      return "#60a5fa" // blue
    case "Normal":
      return "#22c55e" // green
    case "Overweight":
      return "#eab308" // yellow
    case "Obese":
      return "#dc2626" // earth red
    default:
      return "#f5f5f5"
  }
}

const getCategoryPercentage = (bmi: number) => {
  if (bmi < 18.5) return (bmi / 18.5) * 25
  if (bmi < 25) return 25 + ((bmi - 18.5) / 6.5) * 25
  if (bmi < 30) return 50 + ((bmi - 25) / 5) * 25
  return Math.min(75 + ((bmi - 30) / 10) * 25, 100)
}

export function BMICalculator() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState<"male" | "female">("male")
  const [result, setResult] = useState<BMIResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateBMI = () => {
    const h = parseFloat(height) / 100
    const w = parseFloat(weight)

    if (!h || !w || h <= 0 || w <= 0) return

    setIsCalculating(true)

    setTimeout(() => {
      const bmi = w / (h * h)
      let category: BMICategory

      if (bmi < 18.5) category = "Underweight"
      else if (bmi < 25) category = "Normal"
      else if (bmi < 30) category = "Overweight"
      else category = "Obese"

      setResult({ value: bmi, category })
      setIsCalculating(false)
    }, 800)
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#f5f5f5",
    outline: "none",
    transition: "border-color 0.3s",
  }

  return (
    <section id="bmi" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "#0a0a0a" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(220,38,38,0.07) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.35em] uppercase font-medium mb-4" style={{ color: "#dc2626" }}>
            Know Your Body
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white text-balance">
            BMI{" "}
            <span style={{ color: "#dc2626", textShadow: "0 0 20px rgba(220,38,38,0.3)" }}>
              Calculator
            </span>
          </h2>
        </motion.div>

        {/* Calculator card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl p-5 sm:p-8 md:p-12"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(220,38,38,0.12)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 40px rgba(220,38,38,0.04), 0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              {/* Height */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <Ruler className="w-4 h-4" style={{ color: "#dc2626" }} />
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="170"
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(220,38,38,0.6)" }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)" }}
                />
              </div>

              {/* Weight */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <Scale className="w-4 h-4" style={{ color: "#dc2626" }} />
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="70"
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(220,38,38,0.6)" }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)" }}
                />
              </div>

              {/* Age */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <Calendar className="w-4 h-4" style={{ color: "#dc2626" }} />
                  Age
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="25"
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(220,38,38,0.6)" }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)" }}
                />
              </div>

              {/* Gender */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <User className="w-4 h-4" style={{ color: "#dc2626" }} />
                  Gender
                </label>
                <div className="flex gap-4">
                  {(["male", "female"] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGender(g)}
                      className="flex-1 px-4 py-3 rounded-xl transition-all duration-300 capitalize font-medium"
                      style={{
                        background: gender === g ? "#dc2626" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${gender === g ? "#dc2626" : "rgba(255,255,255,0.1)"}`,
                        color: "#fff",
                        boxShadow: gender === g ? "0 4px 15px rgba(220,38,38,0.3)" : "none",
                      }}
                    >
                      {g.charAt(0).toUpperCase() + g.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate button */}
              <motion.button
                onClick={calculateBMI}
                disabled={isCalculating}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl text-white font-semibold text-lg relative overflow-hidden disabled:opacity-70 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
                  boxShadow: "0 4px 20px rgba(220,38,38,0.3)",
                }}
              >
                {isCalculating ? "Calculating..." : "Calculate BMI"}
              </motion.button>
            </div>

            {/* Result */}
            <div className="flex flex-col items-center justify-center">
              {result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center w-full"
                >
                  {/* BMI Value */}
                  <div className="mb-6">
                    <p className="text-6xl md:text-7xl font-black text-white">
                      {result.value.toFixed(1)}
                    </p>
                    <p
                      className="text-2xl font-bold mt-2"
                      style={{ color: getCategoryColor(result.category) }}
                    >
                      {result.category}
                    </p>
                  </div>

                  {/* Progress meter */}
                  <div
                    className="w-full h-4 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${getCategoryPercentage(result.value)}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: getCategoryColor(result.category) }}
                    />
                  </div>

                  {/* Scale labels */}
                  <div
                    className="flex justify-between text-xs mt-2"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    <span>Underweight</span>
                    <span>Normal</span>
                    <span>Overweight</span>
                    <span>Obese</span>
                  </div>

                  {/* BMI ranges */}
                  <div
                    className="mt-6 text-sm space-y-1"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    <p>Underweight: {"<"} 18.5</p>
                    <p>Normal: 18.5 - 24.9</p>
                    <p>Overweight: 25 - 29.9</p>
                    <p>Obese: 30+</p>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      border: "2px dashed rgba(220,38,38,0.3)",
                      background: "rgba(220,38,38,0.04)",
                    }}
                  >
                    <Scale className="w-12 h-12" style={{ color: "rgba(220,38,38,0.4)" }} />
                  </div>
                  <p>Enter your details and calculate your BMI</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
