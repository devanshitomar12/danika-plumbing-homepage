"use client";

import Image from "next/image";
import { useDrawer } from "@/context/DrawerContext";

import { motion } from "framer-motion";
import { fadeInUpVariants, transitionEase } from "@/lib/animations";

export default function EmergencyAndBenefits() {
  const { openDrawer } = useDrawer();

  return (
    <div className="w-full relative z-20">
      {/* 
        1. SECTION TRANSITION: Crisp whitespace above the emergency banner matching the original Danika design.
        No artificial decorative blocks or shapes.
      */}
      <div className="w-full h-10 sm:h-14 lg:h-16 bg-white" />

      {/* 
        2. EMERGENCY SERVICES HORIZONTAL BANNER (Authentic Danika Red Banner) 
      */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: transitionEase }}
        className="bg-[#8f3328] text-white relative min-h-[200px] md:min-h-[240px] lg:min-h-[256px] flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-0 relative flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Block: Overlapping Illustration + Vertically Centered Heading & Subtitle */}
          <div className="flex items-center gap-6 sm:gap-8 w-full md:w-auto relative">
            
            {/* Plumber-with-shield Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: transitionEase }}
              className="relative -mt-12 sm:-mt-16 md:-mt-20 mb-[-12px] sm:mb-[-16px] md:mb-[-20px] w-32 sm:w-40 md:w-44 h-40 sm:h-48 md:h-52 shrink-0 z-30 drop-shadow-xl pointer-events-none select-none"
            >
              <Image
                src="/images/danika-shield-plumber.png"
                alt="Danika Licensed Plumber & Electrician Shield"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Typography */}
            <div className="text-left space-y-1 sm:space-y-1.5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal tracking-normal text-white leading-tight">
                24/7 Emergency Services
              </h2>
              <p className="text-white/85 text-xs sm:text-sm lg:text-[15px] font-light tracking-wide">
                Quick Service. Quality Materials. Realistic Prices.
              </p>
            </div>
          </div>

          {/* Right Block: 'Get in touch' Coral-Red Button aligned on the far right */}
          <div className="w-full md:w-auto flex justify-start md:justify-end shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={openDrawer}
              id="emergency-get-in-touch-btn"
              className="w-full md:w-auto bg-[#d94c3d] hover:bg-[#c43f31] text-white font-bold text-sm sm:text-base px-7 sm:px-9 py-3 sm:py-3.5 rounded shadow-md transition-colors cursor-pointer text-center"
            >
              Get in touch
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* 
        3. FEATURE STRIP (Authentic 4-Column Horizontal Strip with circular badges & subtle vertical dividers) 
      */}
      <section className="bg-white py-5 sm:py-6 border-b border-neutral-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200"
          >
            {[
              {
                title: "Written price first",
                desc: "Approve it before we start",
                icon: (
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                ),
              },
              {
                title: "1-year warranty",
                desc: "Parts and labor",
                icon: (
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                ),
              },
              {
                title: "Financing available",
                desc: "For bigger jobs",
                icon: (
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                ),
              },
              {
                title: "Plumbing + electrical",
                desc: "One call, one invoice",
                icon: (
                  <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                ),
              },
            ].map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: transitionEase }}
                className="flex items-center gap-4 py-3 sm:py-2 px-3 sm:px-6"
              >
                <div className="w-11 h-11 rounded-full bg-[#fbebe8] text-[#d94c3d] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    {feat.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-neutral-900 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-500 font-normal">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
