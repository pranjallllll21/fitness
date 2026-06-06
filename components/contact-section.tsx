"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", phone: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "123 Fitness Avenue, Downtown, CA 90210",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@earthfitness.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 5AM-11PM | Sat-Sun: 6AM-10PM",
    },
  ]

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
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 20% 80%, rgba(220,38,38,0.06) 0%, transparent 60%)",
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
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white text-balance">
            Start Your{" "}
            <span style={{ color: "#dc2626", textShadow: "0 0 20px rgba(220,38,38,0.3)" }}>
              Journey Today
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info & map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="rounded-xl p-6 group transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.3)"
                    ;(e.currentTarget as HTMLElement).style.background = "rgba(220,38,38,0.04)"
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"
                    ;(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg flex-shrink-0 transition-all duration-300"
                      style={{
                        background: "rgba(220,38,38,0.1)",
                        border: "1px solid rgba(220,38,38,0.2)",
                      }}
                    >
                      <info.icon className="w-5 h-5" style={{ color: "#dc2626" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{info.title}</h3>
                      <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {info.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div
              className="rounded-2xl overflow-hidden h-64"
              style={{
                border: "1px solid rgba(220,38,38,0.15)",
                boxShadow: "0 0 20px rgba(220,38,38,0.05)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.25303868478154!3d34.04888612524072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Earth Fitness Location"
              />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-5 sm:p-8 space-y-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(220,38,38,0.12)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 40px rgba(220,38,38,0.04), 0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe"
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(220,38,38,0.6)" }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)" }}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@example.com"
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(220,38,38,0.6)" }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(220,38,38,0.6)" }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us about your fitness goals..."
                  style={{ ...inputStyle, resize: "none" as const }}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(220,38,38,0.6)" }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)" }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-70 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
                  boxShadow: "0 4px 20px rgba(220,38,38,0.3)",
                }}
              >
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : isSubmitted ? "✓ Message Sent!" : "Send Message"}
                </span>
                {!isSubmitting && !isSubmitted && <Send className="w-5 h-5 relative z-10" />}
                {/* Hover shimmer */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
