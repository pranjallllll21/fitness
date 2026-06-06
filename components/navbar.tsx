"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  { name: "About Us", href: "#trainers" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Hall of Fame", href: "#transformation" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            const navItem = navItems.find((item) => item.href === `#${section}`)
            if (navItem) setActiveItem(navItem.name)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string, name: string) => {
    setActiveItem(name)
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        backgroundColor: scrolled ? "rgba(6, 6, 6, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(220,38,38,0.2), 0 4px 30px rgba(0,0,0,0.5)" : "none",
        transition: "background-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => handleNavClick("#home", "Home")}
            className="flex items-center gap-2"
          >
            <img
              src="/images/logo.png"
              alt="Earth Fitness Logo"
              className="h-11 md:h-13 w-auto rounded-full"
              style={{
                objectFit: "contain",
                filter: "brightness(1.05) contrast(1.05)",
              }}
            />
            <div className="flex flex-col items-start">
              <span className="text-[9px] tracking-[0.4em] uppercase font-medium leading-none" style={{ color: "rgba(220,38,38,0.8)" }}>
                EARTH
              </span>
              <span className="text-lg md:text-xl font-black tracking-tight leading-none text-white">
                FITNESS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.name)}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-300"
                style={{
                  color: activeItem === item.name ? "#dc2626" : "rgba(255,255,255,0.65)",
                }}
                onMouseEnter={(e) => {
                  if (activeItem !== item.name)
                    (e.currentTarget as HTMLElement).style.color = "#fff"
                }}
                onMouseLeave={(e) => {
                  if (activeItem !== item.name)
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"
                }}
              >
                {item.name}
                {activeItem === item.name && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] mx-4 rounded-full"
                    style={{ backgroundColor: "#dc2626" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Sign Up Button */}
          <div className="hidden lg:block">
            <Link
              href="#membership"
              onClick={() => handleNavClick("#membership", "Membership")}
              className="px-6 py-2.5 text-sm font-semibold text-white rounded-md transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
                boxShadow: "0 2px 10px rgba(220,38,38,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(220,38,38,0.45)"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 10px rgba(220,38,38,0.25)"
              }}
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              backgroundColor: "rgba(6, 6, 6, 0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(220,38,38,0.2)",
            }}
            className="lg:hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(item.href, item.name)}
                    className="block w-full text-left py-3 text-lg font-medium transition-colors"
                    style={{
                      color: activeItem === item.name ? "#dc2626" : "rgba(255,255,255,0.65)",
                    }}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="#membership"
                  onClick={() => handleNavClick("#membership", "Membership")}
                  className="block w-full px-6 py-3 text-center text-sm font-semibold text-white rounded-md"
                  style={{
                    background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
                  }}
                >
                  Join Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
