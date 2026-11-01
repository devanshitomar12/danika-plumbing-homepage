"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Check } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";

import { motion } from "framer-motion";

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone || !formData.email) {
      setFormStatus("error");
      return;
    }
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 700);
  };

  return (
    <section className="relative w-full bg-[#1b0d0b] text-white pb-16 lg:pb-24 overflow-hidden">
      {/* Full-width Background Photograph (Actual trench excavation plumbing work from original Danika site) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/danika-hero-excavator.webp"
          alt="Danika Plumbing & Electric team working on residential trench and plumbing excavation in Everett, WA"
          fill
          priority
          className="object-cover object-center scale-100"
        />
        {/* Natural Dark Overlay for Text Readability - Exactly matching original website gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e0c0acc] via-[#1e0c0ab0] to-[#1e0c0a80]" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full pt-12 sm:pt-16 lg:pt-20">
        {/* CENTERED HERO COPY & ACTIONS (Exact Original Structure) */}
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Large White Heading Positioned in the Center - Exactly 2 lines on desktop matching Screenshot 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[56px] font-bold tracking-tight text-white leading-[1.18] drop-shadow-md max-w-4xl mx-auto"
          >
            Plumber in Everett, WA: Licensed, Local, and Available 24/7
          </motion.h1>

          {/* Supporting Description Centred Below Heading - Single line on desktop matching Screenshot 1 */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.25 }}
            className="text-sm sm:text-base lg:text-[17px] text-neutral-100 font-normal max-w-4xl mx-auto leading-relaxed drop-shadow-sm whitespace-normal lg:whitespace-nowrap"
          >
            Leak repair, drain cleaning, water heaters and 24/7 emergency plumbing. Established 2009.
          </motion.p>

          {/* Two Horizontally Aligned Buttons Centred Below Description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.38 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            {/* Red Call Now Button */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-[#d94c3d] hover:bg-[#c43f31] text-white px-8 py-3.5 rounded font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-lg transition-colors"
              id="hero-call-now-btn"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call (425) 374-1557</span>
            </motion.a>

            {/* White Outlined Book Online Button */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#get-help"
              className="bg-black/30 hover:bg-white hover:text-danika-maroon border-2 border-white/80 text-white px-8 py-3.5 rounded font-bold text-base sm:text-lg flex items-center justify-center backdrop-blur-sm transition-all"
              id="hero-book-online-btn"
            >
              <span>Book online</span>
            </motion.a>
          </motion.div>

          {/* Small NEW Announcement Badge Below the Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.5 }}
            className="pt-2"
          >
            <a
              href="#electrical-services"
              className="inline-flex items-center gap-2.5 bg-black/40 hover:bg-black/60 border border-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs sm:text-sm text-white font-medium transition-colors"
            >
              <span className="bg-[#ffcf5a] text-[#2b1512] font-extrabold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                NEW
              </span>
              <span>Now offering residential electrical services</span>
            </a>
          </motion.div>

          {/* Trust Indicators in a Horizontal Row Below Announcement */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm font-semibold text-neutral-100"
          >
            {[
              { text: "Google-reviewed (4.7★ · 699 reviews)" },
              { text: "WA Lic. DANIKPL839PF" },
              { text: "24/7 emergency line" },
              { text: "Est. 2009" },
            ].map((item, i) => (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.65 + i * 0.08 }}
                className="flex items-center gap-1.5"
              >
                <Check className="w-4 h-4 text-[#ffcf5a] stroke-[3]" />
                <span>{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* 3. GET HELP NOW CONTACT FORM (Anchored to bottom-left, ~20px offset from viewport left edge, approx 505px wide) */}
        <div className="w-full px-5 sm:px-6 lg:px-5">
          <motion.div
            id="get-help"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.4 }}
            className="mt-14 lg:mt-16 w-full max-w-[505px]"
          >
          <div className="bg-[#8f3328] rounded-xl shadow-2xl p-6 sm:p-7 border border-white/10 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-5">
              Get Help NOW
            </h2>

            {formStatus === "success" ? (
              <div className="p-6 bg-white/10 rounded-lg text-center space-y-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto text-[#ffcf5a]">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-white">Request Received!</h3>
                <p className="text-sm text-neutral-100">
                  Thank you, {formData.firstName}. An Everett service coordinator will call you back at{" "}
                  <span className="font-bold underline">{formData.phone}</span> promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormStatus("idle");
                    setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
                  }}
                  className="mt-3 text-xs underline font-semibold text-[#ffcf5a]"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                {formStatus === "error" && (
                  <p className="text-xs bg-red-900/60 p-2.5 rounded border border-red-400 text-white font-medium">
                    Please provide your name, phone number, and email.
                  </p>
                )}

                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="hero-firstName" className="sr-only">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="hero-firstName"
                      name="firstName"
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white text-neutral-800 placeholder-neutral-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 border-0"
                    />
                  </div>

                  <div>
                    <label htmlFor="hero-lastName" className="sr-only">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="hero-lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white text-neutral-800 placeholder-neutral-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 border-0"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="hero-phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="hero-phone"
                      name="phone"
                      placeholder="Phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white text-neutral-800 placeholder-neutral-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 border-0"
                    />
                  </div>

                  <div>
                    <label htmlFor="hero-email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="hero-email"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white text-neutral-800 placeholder-neutral-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 border-0"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="hero-message" className="sr-only">
                    How can we help?
                  </label>
                  <textarea
                    id="hero-message"
                    name="message"
                    rows={4}
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white text-neutral-800 placeholder-neutral-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 border-0 resize-y"
                  />
                </div>

                {/* Exact Original Danika Consent Text */}
                <p className="text-[12px] leading-relaxed text-white/90 pt-1">
                  Once you submit our form, we may reach out to you via phone, email, or text to
                  communicate service details, which you can opt out of at any time. This form consent is
                  not a condition of purchase. Message/data rates apply.{" "}
                  <a href="#faq" className="underline hover:text-amber-200">
                    Terms and Conditions
                  </a>{" "}
                  |{" "}
                  <a href="#faq" className="underline hover:text-amber-200">
                    Privacy Policy
                  </a>
                  .
                </p>

                {/* reCAPTCHA element (Exact Original Appearance) */}
                <div className="pt-1">
                  <div className="inline-flex items-center justify-between gap-6 bg-white border border-neutral-300 rounded px-3 py-2 shadow-xs text-neutral-700 select-none">
                    <label className="flex items-center gap-3 cursor-pointer text-xs font-medium">
                      <input
                        type="checkbox"
                        required
                        className="w-5 h-5 rounded border-neutral-300 text-[#d94c3d] focus:ring-0 cursor-pointer"
                      />
                      <span>I&#39;m not a robot</span>
                    </label>
                    <div className="flex flex-col items-center justify-center pl-4 border-l border-neutral-200 text-[9px] text-neutral-400 leading-tight">
                      <div className="w-5 h-5 relative mb-0.5">
                        <svg viewBox="0 0 48 48" className="w-full h-full fill-[#4A90E2]">
                          <path d="M24 8V4l-6 6 6 6v-4c7.73 0 14 6.27 14 14 0 2.51-.66 4.87-1.82 6.91l2.94 2.94C41.22 35.1 42 31.67 42 28c0-9.94-8.06-18-18-18zm-14 20c0-2.51.66-4.87 1.82-6.91l-2.94-2.94C6.78 20.9 6 24.33 6 28c0 9.94 8.06 18 18 18v4l6-6-6-6v4c-7.73 0-14-6.27-14-14z"/>
                        </svg>
                      </div>
                      <span className="font-semibold text-[8px] tracking-tight text-neutral-500">reCAPTCHA</span>
                    </div>
                  </div>
                </div>

                {/* Prominent Send My Request Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-[#d94c3d] hover:bg-[#c43f31] text-white font-bold py-3.5 px-6 rounded text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-colors cursor-pointer mt-2"
                  id="hero-form-submit-btn"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send My Request"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
