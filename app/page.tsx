"use client"

import { useState, useCallback } from "react"
import { IntroAnimation } from "@/components/intro-animation"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProgramsSection } from "@/components/programs-section"
import { StatsSection } from "@/components/stats-section"
import { TrainersSection } from "@/components/trainers-section"
import { TransformationSection } from "@/components/transformation-section"
import { BMICalculator } from "@/components/bmi-calculator"
import { MembershipSection } from "@/components/membership-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { DeveloperCredit } from "@/components/developer-credit"

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false)
    setShowContent(true)
  }, [])

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Intro Animation */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Main Content */}
      {showContent && (
        <>
          <Navbar />
          <HeroSection />
          <ProgramsSection />
          <StatsSection />
          <TrainersSection />
          <TransformationSection />
          <BMICalculator />
          <MembershipSection />
          <TestimonialsSection />
          <ContactSection />
          <DeveloperCredit />
          <Footer />
        </>
      )}
    </main>
  )
}
