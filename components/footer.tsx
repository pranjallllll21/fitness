"use client"

import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube, ArrowUp } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
  ],
  programs: [
    { name: "Strength Training", href: "#programs" },
    { name: "Cardio", href: "#programs" },
    { name: "Personal Training", href: "#programs" },
    { name: "Group Classes", href: "#programs" },
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "FAQ", href: "#" },
    { name: "Membership", href: "#membership" },
    { name: "Privacy Policy", href: "#" },
  ],
}

const socials = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      className="relative"
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(220,38,38,0.15)",
      }}
    >
      {/* Red top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.5), transparent)",
          boxShadow: "0 0 20px rgba(220,38,38,0.2)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Earth Fitness Logo"
                className="h-14 w-auto rounded-full"
                style={{
                  objectFit: "contain",
                  filter: "brightness(1.05) contrast(1.05)",
                }}
              />
              <div>
                <span className="block text-[9px] tracking-[0.4em] uppercase font-medium" style={{ color: "rgba(220,38,38,0.8)" }}>
                  EARTH
                </span>
                <span className="block text-xl font-black tracking-tight text-white leading-none">
                  FITNESS
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Forge the strongest version of yourself with world-class facilities, elite trainers,
              and a community dedicated to breaking limits.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  aria-label={social.name}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#dc2626"
                    ;(e.currentTarget as HTMLElement).style.borderColor = "#dc2626"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(220,38,38,0.3)"
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"
                    ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
                  }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { heading: "Company", links: footerLinks.company },
            { heading: "Programs", links: footerLinks.programs },
            { heading: "Support", links: footerLinks.support },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="font-semibold text-white mb-4 text-sm tracking-wide">{heading}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-300"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#dc2626" }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            &copy; {new Date().getFullYear()} Earth Fitness. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm transition-all duration-300 group"
            style={{ color: "rgba(255,255,255,0.4)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#dc2626" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)" }}
          >
            Back to top
            <span
              className="p-2 rounded-full transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
