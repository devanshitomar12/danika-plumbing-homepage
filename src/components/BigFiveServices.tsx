"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Phone, Calendar, ArrowRight, Shield, Wrench, Droplet } from "lucide-react";
import { BIG_FIVE_TABS, BUSINESS_INFO } from "@/data/siteData";

import { motion, AnimatePresence } from "framer-motion";
import { fadeInUpVariants, transitionEase } from "@/lib/animations";

export default function BigFiveServices() {
  const [activeTab, setActiveTab] = useState(BIG_FIVE_TABS[0].id);

  const selectedService = BIG_FIVE_TABS.find((tab) => tab.id === activeTab) || BIG_FIVE_TABS[0];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: transitionEase }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-xs font-bold tracking-wider uppercase text-danika-maroon bg-danika-maroon/10 px-3 py-1 rounded-full">
            Core Service Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-danika-charcoal tracking-tight">
            The Big Five: Plumbing & Water Systems
          </h2>
          <p className="text-base text-neutral-600">
            From emergency repairs to planned installations, click through Danika&apos;s primary
            service domains designed specifically for Snohomish County homes and businesses.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: transitionEase }}
          className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-danika-offwhite rounded-2xl max-w-4xl mx-auto border border-neutral-200"
        >
          {BIG_FIVE_TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-danika-maroon text-white shadow-md scale-[1.02]"
                    : "text-neutral-700 hover:text-danika-maroon hover:bg-white/80"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </motion.div>

        {/* Active Tab Panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: transitionEase }}
          className="bg-danika-offwhite rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm"
        >
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Content Left */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-danika-coral bg-white px-3 py-1 rounded-full border border-neutral-200">
                {selectedService.name} Overview
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-danika-charcoal leading-snug">
                {selectedService.headline}
              </h3>

              <p className="text-base text-danika-maroon font-semibold">
                {selectedService.subhead}
              </p>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {selectedService.details}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2.5 pt-2">
                {selectedService.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-neutral-800">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-danika-maroon hover:bg-danika-maroonDark text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (425) 374-1557</span>
                </a>
                <a
                  href="#get-help"
                  className="bg-white hover:bg-neutral-50 text-danika-charcoal border border-neutral-300 px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-danika-coral" />
                  <span>Schedule Service</span>
                </a>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src={selectedService.image}
                alt={selectedService.headline}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 text-danika-charcoal text-xs font-medium max-w-sm">
                  <p className="font-bold text-danika-maroon">Verified Danika Craftsmanship</p>
                  <p className="text-neutral-600">Everett, WA & Snohomish County field installation</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
