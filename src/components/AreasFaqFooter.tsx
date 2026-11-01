"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  ChevronDown,
  Phone,
  Calendar,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Award,
  Settings,
} from "lucide-react";
import {
  SERVICE_AREAS_SNOHOMISH,
  SERVICE_AREAS_KING,
  FAQS_DATA,
  BUSINESS_INFO,
} from "@/data/siteData";
import { motion } from "framer-motion";
import { fadeInUpVariants, transitionEase } from "@/lib/animations";

export default function AreasFaqFooter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="space-y-20">
        {/* Section U: Service Areas - Original Danika Layout */}
      <section id="service-areas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: transitionEase }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          {/* Left Column: Heading, Description, Cities */}
          <div className="lg:col-span-7 space-y-7">
            {/* Tagline */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-danika-coral inline-block" />
              <span className="text-xs font-bold tracking-widest uppercase text-danika-coral">
                WHERE THE TRUCKS GO
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#8B3A2B] tracking-tight leading-tight">
              Our Service Area: Snohomish County and King County
            </h2>

            {/* Description */}
            <p className="text-base text-neutral-600 leading-relaxed">
              Our plumbers work from Everett north to Arlington, east to Monroe, and south through
              Lynnwood and Bothell into Seattle and the Eastside. The{" "}
              <a
                href="#service-areas"
                className="text-danika-coral underline hover:text-[#8B3A2B] transition-colors"
              >
                full service area list
              </a>{" "}
              shows every city we cover.
            </p>

            {/* Snohomish County Cities */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-danika-charcoal">
                Snohomish County Cities We Serve
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "Everett", highlighted: true },
                  { name: "Mukilteo", highlighted: true },
                  { name: "Mill Creek", highlighted: true },
                  { name: "Marysville", highlighted: true },
                  { name: "Lynnwood", highlighted: true },
                  { name: "Edmonds", highlighted: true },
                  { name: "Lake Stevens", highlighted: true },
                  { name: "Snohomish", highlighted: false },
                  { name: "Arlington", highlighted: true },
                  { name: "Monroe", highlighted: true },
                  { name: "Mountlake Terrace", highlighted: true },
                  { name: "Brier", highlighted: true },
                  { name: "Bothell", highlighted: false },
                ].map((city, idx) => (
                  <span
                    key={idx}
                    className={`inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-neutral-300 ${
                      city.highlighted
                        ? "text-danika-coral border-neutral-300 bg-white"
                        : "text-neutral-700 border-neutral-300 bg-white"
                    } hover:border-danika-coral/50 transition-colors`}
                  >
                    {city.name}
                  </span>
                ))}
              </div>
            </div>

            {/* King County Cities */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-danika-charcoal">
                King County and Seattle Neighborhoods We Serve
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "Shoreline", highlighted: true },
                  { name: "Kenmore", highlighted: false },
                  { name: "Woodinville", highlighted: true },
                  { name: "Kirkland", highlighted: true },
                  { name: "Redmond", highlighted: true },
                  { name: "Bellevue", highlighted: true },
                  { name: "Issaquah", highlighted: true },
                  { name: "Duvall", highlighted: true },
                  { name: "Maple Valley", highlighted: true },
                  { name: "Seattle", highlighted: true },
                  { name: "Lake City", highlighted: true },
                  { name: "West Seattle", highlighted: false },
                ].map((city, idx) => (
                  <span
                    key={idx}
                    className={`inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-neutral-300 ${
                      city.highlighted
                        ? "text-danika-coral border-neutral-300 bg-white"
                        : "text-neutral-700 border-neutral-300 bg-white"
                    } hover:border-danika-coral/50 transition-colors`}
                  >
                    {city.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Emergency Description */}
            <p className="text-sm text-neutral-600 leading-relaxed pt-2">
              Emergency plumbing is available across the whole service area. If your town is not
              listed, call and ask.
            </p>
          </div>

          {/* Right Column: Google Maps & Directions */}
          <div className="lg:col-span-5 space-y-4">
            <div className="w-full h-[360px] sm:h-[400px] rounded-2xl overflow-hidden border border-neutral-300/80 shadow-sm relative bg-neutral-100">
              <iframe
                title="Danika Plumbing & Electric Everett Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.84499119133!2d-122.26655212328122!3d47.89789846820293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490006986531ebf%3A0x4c7f17b840fa6af2!2sDanika%20Plumbing%20%26%20Electric!5e0!3m2!1sen!2sus!4v1714500000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Get directions button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Danika+Plumbing+%26+Electric+11015+Airport+Rd+Everett+WA+98204"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-danika-coral hover:bg-danika-coralHover text-white font-bold text-sm rounded-lg shadow-sm transition-colors"
            >
              Get directions
            </a>

            {/* Address & Google Maps link */}
            <p className="text-xs sm:text-sm text-neutral-600 pt-1">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-danika-coral underline hover:text-[#8B3A2B] transition-colors"
              >
                Danika Plumbing & Electric on Google Maps
              </a>{" "}
              &middot; 11015 Airport Road, Everett, WA 98204
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section V: Frequently Asked Questions */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: transitionEase }}
          className="text-center space-y-3"
        >
          <span className="text-xs uppercase font-bold text-danika-coral tracking-widest bg-red-50 px-3 py-1 rounded-full">
            Answers & Clarity
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-danika-charcoal tracking-tight">
            Plumbing Questions from Everett Homeowners
          </h2>
          <p className="text-sm text-neutral-600">
            Real answers to common questions about water heaters, emergencies, older pipes, and costs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: transitionEase }}
          className="space-y-3"
        >
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-danika-offwhite rounded-xl border border-neutral-200/80 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-danika-charcoal hover:text-danika-maroon text-sm sm:text-base transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-neutral-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-danika-maroon" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/40 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </section>

      {/* Section W: Serving Everett Since 2009 */}
      <section className="bg-gradient-to-br from-danika-maroon via-danika-maroonDark to-red-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: transitionEase }}
            className="grid lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-danika-gold bg-white/10 px-3 py-1 rounded-full">
                Independent Local Ownership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Serving Everett Since 2009
              </h2>
              <p className="text-sm sm:text-base text-neutral-100 leading-relaxed">
                Danika Plumbing & Electric is not a franchise. Acquired in 2016 by owner Frank Gaborik,
                our company operates from a single dedicated shop at 11015 Airport Road. When you call,
                you speak to real Washingtonians who take pride in quick service, quality materials, and
                realistic prices.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-danika-coral hover:bg-danika-coralHover text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (425) 374-1557</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#get-help"
                  className="bg-white/15 hover:bg-white/25 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-colors backdrop-blur-sm"
                >
                  <Calendar className="w-4 h-4 text-danika-gold" />
                  <span>Schedule Service</span>
                </motion.a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: transitionEase }}
              className="lg:col-span-4 relative h-64 rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-white/10 backdrop-blur-sm"
            >
              <Image
                src="/images/danika-van.png"
                alt="Danika Plumbing & Electric Van"
                fill
                className="object-contain p-4 transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      </div>

      {/* Section X: Original Two-Column Get Help NOW Section (Immediately Above Map/Cards) */}
      <section id="get-help-section" className="relative w-full bg-[#923528] overflow-hidden text-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: transitionEase }}
          className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[580px] lg:min-h-[640px]"
        >
          {/* Left Column: Original Plumbing Technician Photograph */}
          <div className="relative w-full h-[360px] sm:h-[440px] lg:h-auto min-h-[360px] lg:min-h-full overflow-hidden">
            <Image
              src="/images/Sewer-Repair-Myths-Compressed.jpg"
              alt="Danika Plumbing Professional Technician at work"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Column: Dark Maroon Form (#923528) */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-14 lg:px-14 lg:py-16 xl:px-20 bg-[#923528]">
            <div className="max-w-xl w-full mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Get Help NOW
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your message has been received.");
                }}
                className="space-y-4"
                noValidate
              >
                {/* Name Field (Full width) */}
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full bg-white text-neutral-800 placeholder-neutral-500 px-4 py-3.5 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400 shadow-xs"
                  />
                </div>

                {/* Email and Phone (Two columns on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="E-mail"
                      className="w-full bg-white text-neutral-800 placeholder-neutral-500 px-4 py-3.5 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400 shadow-xs"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone"
                      className="w-full bg-white text-neutral-800 placeholder-neutral-500 px-4 py-3.5 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400 shadow-xs"
                    />
                  </div>
                </div>

                {/* Message Field (Large textarea) */}
                <div>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Message"
                    className="w-full bg-white text-neutral-800 placeholder-neutral-500 px-4 py-3.5 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400 shadow-xs resize-none"
                  />
                </div>

                {/* SMS Consent Disclosure */}
                <p className="text-xs sm:text-[13px] leading-relaxed text-white/90 pt-1">
                  Once you submit our form, we may reach out to you via phone, email, or text to
                  communicate service details, which you can opt out of at any time. This form
                  consent is not a condition of purchase. Message/data rates apply.{" "}
                  <a href="#faq" className="underline hover:text-amber-200">
                    Terms and Conditions
                  </a>{" "}
                  |{" "}
                  <a href="#faq" className="underline hover:text-amber-200">
                    Privacy Policy
                  </a>
                  .
                </p>

                {/* Google reCAPTCHA Integration */}
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
                          <path d="M24 8V4l-6 6 6 6v-4c7.73 0 14 6.27 14 14 0 2.51-.66 4.87-1.82 6.91l2.94 2.94C41.22 35.1 42 31.67 42 28c0-9.94-8.06-18-18-18zm-14 20c0-2.51.66-4.87 1.82-6.91l-2.94-2.94C6.78 20.9 6 24.33 6 28c0 9.94 8.06 18 18 18v4l6-6-6-6v4c-7.73 0-14-6.27-14-14z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-neutral-500">reCAPTCHA</span>
                    </div>
                  </div>
                </div>

                {/* Prominent Red Send Message Button */}
                <div className="pt-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 bg-[#DF493A] hover:bg-[#c83b2d] text-white font-bold text-base rounded shadow-md transition-colors"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section Y: Full-Width Satellite Map with 3 Overlapping White Cards */}
      <section id="contact-location" className="relative w-full">
        {/* Full-width Satellite Map Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: transitionEase }}
          className="relative w-full h-[460px] sm:h-[500px] lg:h-[540px] overflow-hidden bg-neutral-900"
        >
          <iframe
            title="Danika Plumbing & Electric Satellite Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.84499119133!2d-122.26655212328122!3d47.89789846820293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490006986531ebf%3A0x4c7f17b840fa6af2!2sDanika%20Plumbing%20%26%20Electric!5e1!3m2!1sen!2sus!4v1714500000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </motion.div>

        {/* 3 Overlapping White Cards Container */}
        <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: transitionEase }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {/* Card 1: Head Office */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-lg border border-neutral-100/90 px-6 py-5 sm:px-7 sm:py-5 flex flex-col items-center text-center relative pt-10 sm:pt-11 h-full transition-shadow hover:shadow-xl"
            >
              <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 w-15 h-15 sm:w-16 sm:h-16 rounded-full bg-[#DF493A] text-white flex items-center justify-center shadow-md">
                <MapPin className="w-7 h-7 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-danika-charcoal mb-2">
                Head Office
              </h3>
              <div className="my-auto flex items-center justify-center py-1">
                <p className="text-sm sm:text-base font-semibold text-[#8B3A2B] leading-relaxed">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-danika-coral transition-colors"
                  >
                    11015 Airport Road<br />Everett, WA 98204
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Card 2: Get in Touch */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-lg border border-neutral-100/90 px-6 py-5 sm:px-7 sm:py-5 flex flex-col items-center text-center relative pt-10 sm:pt-11 h-full transition-shadow hover:shadow-xl"
            >
              <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 w-15 h-15 sm:w-16 sm:h-16 rounded-full bg-[#DF493A] text-white flex items-center justify-center shadow-md">
                <Phone className="w-7 h-7 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-danika-charcoal mb-2">
                Get in Touch
              </h3>
              <div className="my-auto space-y-1 text-sm sm:text-base font-semibold text-[#8B3A2B] py-1">
                <p>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="underline hover:text-danika-coral transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="underline hover:text-danika-coral transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Card 3: Service Areas */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-lg border border-neutral-100/90 px-6 py-5 sm:px-7 sm:py-5 flex flex-col items-center text-center relative pt-10 sm:pt-11 h-full transition-shadow hover:shadow-xl"
            >
              <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 w-15 h-15 sm:w-16 sm:h-16 rounded-full bg-[#DF493A] text-white flex items-center justify-center shadow-md">
                <Settings className="w-7 h-7 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-danika-charcoal mb-2">
                Service Areas
              </h3>
              <p className="text-xs sm:text-[13px] text-[#8B3A2B] font-medium leading-relaxed mb-3 max-w-sm mx-auto">
                <a href="#service-areas" className="underline hover:text-danika-coral">Plumber in Everett WA</a>,{" "}
                <a href="#service-areas" className="underline hover:text-danika-coral">Electrician in Everett WA</a>,{" "}
                <a href="#service-areas" className="underline hover:text-danika-coral">Mukilteo</a>,{" "}
                <a href="#service-areas" className="underline hover:text-danika-coral">Mill Creek</a>,{" "}
                <a href="#service-areas" className="underline hover:text-danika-coral">Marysville</a>,{" "}
                <a href="#service-areas" className="underline hover:text-danika-coral">Lynnwood</a>,{" "}
                <a href="#service-areas" className="underline hover:text-danika-coral">Edmonds</a>
              </p>
              <div className="mt-auto space-y-0.5">
                <p>
                  <a
                    href="#service-areas"
                    className="text-sm font-bold text-[#8B3A2B] underline hover:text-danika-coral transition-colors inline-flex items-center gap-1"
                  >
                    <span>See all 25 cities we serve &rarr;</span>
                  </a>
                </p>
                <p className="text-xs text-neutral-500 font-medium">
                  Across Snohomish & King County
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Z: Comprehensive Footer */}
      <footer className="bg-danika-charcoal text-white pt-10 sm:pt-12 pb-20 sm:pb-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: transitionEase }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
          >
            {/* Col 1: Brand Info (3 cols on desktop) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="relative w-52 sm:w-56 h-14 bg-danika-maroon px-3 py-1.5 rounded-xl shadow-md border border-white/10 flex items-center justify-center">
                <Image
                  src="/images/danika-original-logo.png"
                  alt="Danika Plumbing & Electric"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <p className="text-xs text-neutral-300 font-semibold tracking-wide">
                {BUSINESS_INFO.tagline}
              </p>
              <p className="text-xs text-neutral-300 leading-relaxed max-w-sm">
                Licensed Washington plumbing and electrical contractor serving Everett, Snohomish
                County and King County since 2009.
              </p>
              <div className="pt-0.5">
                <span className="text-xs font-bold text-danika-gold">
                  WA Lic. #{BUSINESS_INFO.license}
                </span>
              </div>
            </div>

            {/* Col 2: Plumbing Services (3 cols on desktop) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider pb-1 border-b border-neutral-800/80">
                Plumbing Services
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li>
                  <a href="#water-heaters" className="hover:text-danika-coral transition-colors">
                    Water Heater Repair & Replacement
                  </a>
                </li>
                <li>
                  <a href="#drain-sewer" className="hover:text-danika-coral transition-colors">
                    Drain Cleaning & Hydro Jetting
                  </a>
                </li>
                <li>
                  <a href="#drain-sewer" className="hover:text-danika-coral transition-colors">
                    Sewer Camera Inspection & Line Repair
                  </a>
                </li>
                <li>
                  <a href="#water-lines" className="hover:text-danika-coral transition-colors">
                    Whole-Home PEX-A Repiping
                  </a>
                </li>
                <li>
                  <a href="#gas-fixtures" className="hover:text-danika-coral transition-colors">
                    Gas Line Installation & Appliance Hookup
                  </a>
                </li>
                <li>
                  <a href="#gas-fixtures" className="hover:text-danika-coral transition-colors">
                    Toilets, Sinks & Garbage Disposals
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Electrical Services (2.5 cols on desktop) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider pb-1 border-b border-neutral-800/80">
                Electrical Services
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li>
                  <a href="#electrical-services" className="hover:text-danika-coral transition-colors">
                    200A Panel Upgrades
                  </a>
                </li>
                <li>
                  <a href="#electrical-services" className="hover:text-danika-coral transition-colors">
                    EV Charger (Level 2)
                  </a>
                </li>
                <li>
                  <a href="#electrical-services" className="hover:text-danika-coral transition-colors">
                    Backup Generator Hookups
                  </a>
                </li>
                <li>
                  <a href="#electrical-services" className="hover:text-danika-coral transition-colors">
                    Whole-Home Rewiring
                  </a>
                </li>
                <li>
                  <a href="#electrical-services" className="hover:text-danika-coral transition-colors">
                    Emergency Troubleshooting
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Dispatch (3 cols on desktop, clearly positioned clear of chatbot) */}
            <div className="lg:col-span-3 space-y-3 lg:-translate-x-20">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider pb-1 border-b border-neutral-800/80">
                Contact & Dispatch
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                11015 Airport Road<br />Everett, WA 98204
              </p>
              <p className="text-sm font-bold text-danika-coral pt-0.5">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>Call (425) 374-1557</a>
              </p>
              <p className="text-xs text-neutral-300">
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </p>
              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#get-help"
                  className="inline-block bg-[#DF493A] hover:bg-[#c83b2d] text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-md transition-colors whitespace-nowrap"
                >
                  Schedule Dispatch Online
                </motion.a>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <p>
              &copy; {new Date().getFullYear()} Danika Plumbing, LLC. All rights reserved. WA Contractor
              License: DANIKPL839PF.
            </p>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <a href="#" className="hover:text-neutral-200 transition-colors">
                Privacy Policy
              </a>
              <span>&middot;</span>
              <a href="#" className="hover:text-neutral-200 transition-colors">
                Terms and Conditions
              </a>
              <span>&middot;</span>
              <a
                href={BUSINESS_INFO.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors"
              >
                WA L&I Verification
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
