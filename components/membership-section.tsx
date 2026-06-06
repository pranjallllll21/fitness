"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Check, Zap, Crown, Shield } from "lucide-react"
import Link from "next/link"

type BillingCycle = "monthly" | "quarterly" | "yearly"

const plans = [
  {
    name: "Warrior",
    icon: Shield,
    description: "For those who are beginning their conquest",
    prices: {
      monthly: 249,
      quarterly: 699,
      yearly: 2499,
    },
    savings: {
      monthly: null,
      quarterly: "Save ₹50",
      yearly: "Save ₹489",
    },
    features: [
      "Full gym access",
      "Locker room access",
      "Basic equipment training",
      "Group fitness classes",
      "Fitness assessment",
    ],
    highlighted: false,
  },
  {
    name: "Titan",
    icon: Zap,
    description: "For dedicated athletes forging serious results",
    prices: {
      monthly: 499,
      quarterly: 1399,
      yearly: 4999,
    },
    savings: {
      monthly: null,
      quarterly: "Save ₹99",
      yearly: "Save ₹989",
    },
    features: [
      "Everything in Warrior",
      "Personal trainer (2x/week)",
      "Nutrition consultation",
      "Priority equipment access",
      "Sauna & recovery room",
      "Progress tracking app",
    ],
    highlighted: true,
  },
  {
    name: "Legend",
    icon: Crown,
    description: "The ultimate Earth Fitness experience",
    prices: {
      monthly: 999,
      quarterly: 2799,
      yearly: 9999,
    },
    savings: {
      monthly: null,
      quarterly: "Save ₹198",
      yearly: "Save ₹1,989",
    },
    features: [
      "Everything in Titan",
      "Unlimited personal training",
      "Custom meal plans",
      "Private locker",
      "VIP lounge access",
      "Guest passes (4x/month)",
      "Exclusive member events",
    ],
    highlighted: false,
  },
]

const cycleLabel: Record<BillingCycle, string> = {
  monthly: "/ month",
  quarterly: "/ quarter",
  yearly: "/ year",
}

export function MembershipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [billing, setBilling] = useState<BillingCycle>("monthly")

  return (
    <section id="membership" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)",
        }}
      />
      {/* Red glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgba(220,38,38,0.04)" }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm tracking-[0.35em] uppercase font-medium mb-4" style={{ color: "#dc2626" }}>
            Membership Plans
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white text-balance">
            Choose Your{" "}
            <span style={{ color: "#dc2626", textShadow: "0 0 20px rgba(220,38,38,0.3)" }}>
              Battle Tier
            </span>
          </h2>
          <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Every plan includes access to Earth Fitness premium facilities
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-14"
        >
          {(["monthly", "quarterly", "yearly"] as BillingCycle[]).map((cycle) => (
            <button
              key={cycle}
              onClick={() => setBilling(cycle)}
              className="relative px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-300"
              style={{
                color: billing === cycle ? "#fff" : "rgba(255,255,255,0.4)",
                background: billing === cycle
                  ? "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)"
                  : "rgba(255,255,255,0.04)",
                border: billing === cycle
                  ? "1px solid rgba(220,38,38,0.6)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: billing === cycle ? "0 4px 15px rgba(220,38,38,0.3)" : "none",
              }}
            >
              {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
              {cycle === "yearly" && (
                <span
                  className="absolute -top-2 -right-2 text-[9px] px-1.5 py-0.5 rounded-full font-bold"
                  style={{ background: "#dc2626", color: "#fff" }}
                >
                  BEST
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-0">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${plan.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <div
                className="h-full rounded-3xl p-6 sm:p-8 transition-all duration-300 group-hover:-translate-y-2"
                style={{
                  background: plan.highlighted
                    ? "linear-gradient(135deg, rgba(220,38,38,0.12) 0%, rgba(153,27,27,0.08) 100%)"
                    : "rgba(255,255,255,0.02)",
                  border: plan.highlighted
                    ? "2px solid rgba(220,38,38,0.45)"
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: plan.highlighted
                    ? "0 0 25px rgba(220,38,38,0.08), 0 20px 60px rgba(0,0,0,0.4)"
                    : "0 10px 40px rgba(0,0,0,0.3)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Popular badge */}
                {plan.highlighted && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-sm font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
                      boxShadow: "0 4px 15px rgba(220,38,38,0.4)",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Plan icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: plan.highlighted ? "rgba(220,38,38,0.2)" : "rgba(220,38,38,0.08)",
                      border: "1px solid rgba(220,38,38,0.3)",
                    }}
                  >
                    <plan.icon className="w-6 h-6" style={{ color: "#dc2626" }} />
                  </div>
                </div>

                {/* Plan info */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {plan.description}
                  </p>
                  <div className="mt-6 flex flex-col items-center gap-1">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={billing}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                        className="flex items-baseline gap-1"
                      >
                        <span className="text-5xl font-black text-white">
                          ₹{plan.prices[billing].toLocaleString("en-IN")}
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>
                          {cycleLabel[billing]}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                    {plan.savings[billing] && (
                      <motion.span
                        key={`saving-${billing}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs font-semibold px-3 py-0.5 rounded-full"
                        style={{
                          background: "rgba(220,38,38,0.15)",
                          color: "#dc2626",
                          border: "1px solid rgba(220,38,38,0.3)",
                        }}
                      >
                        {plan.savings[billing]}
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div
                        className="p-1 rounded-full flex-shrink-0"
                        style={{
                          background: plan.highlighted ? "#dc2626" : "rgba(220,38,38,0.15)",
                          border: "1px solid rgba(220,38,38,0.4)",
                        }}
                      >
                        <Check
                          className="w-3 h-3"
                          style={{ color: plan.highlighted ? "#fff" : "#dc2626" }}
                        />
                      </div>
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="#contact"
                  className="block w-full py-4 rounded-xl text-center font-semibold transition-all duration-300"
                  style={{
                    background: plan.highlighted
                      ? "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)"
                      : "rgba(220,38,38,0.08)",
                    color: "#fff",
                    border: plan.highlighted ? "none" : "1px solid rgba(220,38,38,0.3)",
                    boxShadow: plan.highlighted ? "0 4px 20px rgba(220,38,38,0.3)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.highlighted) {
                      (e.currentTarget as HTMLElement).style.background = "rgba(220,38,38,0.15)"
                      ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.6)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.highlighted) {
                      (e.currentTarget as HTMLElement).style.background = "rgba(220,38,38,0.08)"
                      ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.3)"
                    }
                  }}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
