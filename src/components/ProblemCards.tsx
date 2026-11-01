"use client";

import {
  Flame,
  RotateCcw,
  AlertTriangle,
  Droplets,
  Search,
  Gauge,
  CheckCircle2,
  Zap,
  ArrowRight,
  Home,
  Building2,
  Phone,
  Calendar,
} from "lucide-react";
import { PROBLEM_CARDS, BUSINESS_INFO } from "@/data/siteData";

import { motion } from "framer-motion";
import { fadeInUpVariants, transitionEase } from "@/lib/animations";

const iconMap = {
  Flame,
  RotateCcw,
  AlertTriangle,
  Droplets,
  Search,
  Gauge,
  CheckCircle2,
  Zap,
};

export default function ProblemCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: transitionEase }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-xs font-bold tracking-wider uppercase text-danika-maroon bg-danika-maroon/10 px-3 py-1 rounded-full">
            Local Everett Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-danika-charcoal tracking-tight">
            Plumbing Services in Everett and Snohomish County
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            From historic craftsman homes with old cast iron sewer stacks to modern commercial
            facilities, our licensed technicians provide fast, guaranteed diagnostics and repairs.
          </p>
        </motion.div>

        {/* 8 Problem-Based Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_CARDS.map((card, index) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap] || Droplets;
            return (
              <motion.a
                key={index}
                href={card.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1, ease: transitionEase }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-danika-offwhite hover:bg-white p-6 rounded-2xl border border-neutral-200/70 hover:border-danika-maroon/30 shadow-sm hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
                id={`problem-card-${index}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-danika-maroon group-hover:text-white text-danika-maroon border border-neutral-200/80 shadow-xs flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-200/70 px-2 py-0.5 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-danika-charcoal group-hover:text-danika-maroon transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-neutral-200/50 flex items-center justify-between text-xs font-bold text-danika-maroon group-hover:text-danika-coral transition-colors">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Residential and Commercial Plumbing Split Sections */}
        <div className="grid md:grid-cols-2 gap-8 pt-6">
          {/* Residential Section */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: transitionEase }}
            className="bg-danika-offwhite p-8 rounded-2xl border border-neutral-200/80 space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-danika-maroon text-white flex items-center justify-center">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-danika-charcoal">
              Residential Plumber Services for Everett Homes
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We treat your home like our own. Whether you need a quick toilet repair, a new
              high-efficiency tankless water heater, or whole-house repiping to eliminate rusty
              galvanized piping, our licensed journeymen protect your floors, work efficiently, and
              clean up completely when finished.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-neutral-700 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-danika-coral" />
                <span>Whole-home repiping (PEX-A) & slab leak detection</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-danika-coral" />
                <span>Water heater installations (Tank & Tankless Navien/Takagi)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-danika-coral" />
                <span>Sewer line camera inspection and high-pressure jetting</span>
              </li>
            </ul>
          </motion.div>

          {/* Commercial Section */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: transitionEase }}
            className="bg-danika-offwhite p-8 rounded-2xl border-2 border-danika-maroon/20 space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-danika-coral text-white flex items-center justify-center shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-danika-charcoal">
              Commercial Plumbing Services for Everett Businesses
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Downtime costs revenue. We provide prompt, code-compliant commercial plumbing and
              scheduled preventative maintenance for restaurants, property management companies,
              retail stores, and commercial office complexes across Snohomish County.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-neutral-700 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-danika-maroon" />
                <span>Commercial water heaters, backflow testing & certified repiping</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-danika-maroon" />
                <span>Grease trap line hydro jetting and industrial drain unclogging</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-danika-maroon" />
                <span>Property manager priority dispatch accounts available</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Contact CTA: "Not sure which one it is?" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: transitionEase }}
          className="bg-gradient-to-r from-danika-maroon via-danika-maroonDark to-neutral-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs uppercase font-bold text-danika-gold tracking-widest">
              Diagnosis & Written Quote
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Not sure which one it is?
            </h3>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
              Every Danika visit starts with an honest in-person diagnostic and a firm written price
              before work begins. We will find the source and tell you exactly what it takes to fix.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-danika-coral hover:bg-danika-coralHover text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call (425) 374-1557</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#get-help"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors"
            >
              <Calendar className="w-4 h-4 text-danika-gold" />
              <span>Book Online</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
