"use client";

import {
  AlertTriangle,
  Droplets,
  DollarSign,
  HelpCircle,
  Zap,
  Check,
  Building,
  CheckCircle2,
} from "lucide-react";
import { OLDER_HOMES_PIPES, BUSINESS_INFO } from "@/data/siteData";

import { motion } from "framer-motion";
import { fadeInUpVariants, transitionEase } from "@/lib/animations";

export default function EducationalAndCosts() {
  return (
    <div className="space-y-20 py-16 bg-white">
      {/* Section Q: Older Everett Homes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: transitionEase }}
          className="bg-danika-offwhite rounded-3xl p-8 sm:p-12 border border-neutral-200/80 space-y-8"
        >
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold text-danika-maroon tracking-widest bg-white px-3 py-1 rounded-full border border-neutral-200">
              Local Architectural Insight
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-danika-charcoal tracking-tight">
              Older Everett Homes: Cast Iron, Galvanized, and Polybutylene Pipes
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Everett has rich historic architectural stock, from early 1900s craftsman homes in
              Riverside, Bayside, and Northwest Everett to post-war mid-century neighborhoods. Each era
              brought specific plumbing materials that are now reaching the end of their operational
              lifespan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {OLDER_HOMES_PIPES.map((pipe, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: transitionEase }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-xs space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-red-50 text-danika-maroon flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-danika-charcoal">{pipe.type}</h3>
                  <p className="text-xs font-semibold text-danika-coral">{pipe.era}</p>
                  <p className="text-xs text-neutral-600 leading-relaxed pt-1">{pipe.issue}</p>
                </div>
                <div className="pt-3 border-t border-neutral-100">
                  <p className="text-[11px] font-bold text-emerald-800 bg-emerald-50 p-2 rounded-lg">
                    Solution: {pipe.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section R: Water Quality and Water Pressure */}
      <section id="water-quality" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: transitionEase }}
          className="grid lg:grid-cols-2 gap-10 items-stretch"
        >
          <div className="bg-gradient-to-br from-danika-maroon via-danika-maroonDark to-red-950 text-white rounded-3xl p-8 sm:p-10 space-y-5 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold text-danika-gold tracking-widest bg-white/10 px-3 py-1 rounded-full">
                Municipal Water Source
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Water Quality and Water Pressure in Everett and Snohomish County
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-neutral-100 leading-relaxed">
                <h3 className="text-base font-bold text-white">Where Everett&apos;s Water Comes From</h3>
                <p>
                  Everett&apos;s drinking water originates in the pristine Cascade Mountains at Spada
                  Reservoir, managed by the City of Everett via the Sultan River basin. It is naturally
                  soft water.
                </p>
                <p>
                  Because mountain water is naturally soft with low mineral content, water quality
                  concerns inside homes almost always stem from the pipes inside the property—such as
                  corroding galvanized supply lines—rather than city treatment facilities.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-neutral-100">
              <span className="font-bold text-danika-gold">Annual Testing: </span>
              Both Everett and Seattle publish comprehensive annual drinking water quality reports. Our
              technicians test residential incoming pressure and hardness right at your bibb.
            </div>
          </div>

          <div className="bg-danika-offwhite rounded-3xl p-8 sm:p-10 border border-neutral-200/80 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold text-danika-maroon tracking-widest bg-white px-3 py-1 rounded-full border border-neutral-200">
                System Diagnostics
              </span>
              <h3 className="text-2xl font-extrabold text-danika-charcoal">
                How Water Pressure Problems Show Up at Home
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Water pressure issues in Snohomish County homes typically manifest in two distinct ways:
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-xl border border-neutral-200/70">
                  <h4 className="text-sm font-bold text-danika-charcoal">Low Water Pressure</h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Occurs when showers turn to a trickle when a toilet flushes. Usually caused by
                    internal corrosion narrowing galvanized pipes, partially closed curb stops, or a
                    clogged aerator.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-neutral-200/70">
                  <h4 className="text-sm font-bold text-danika-charcoal">Excessively High Pressure (&gt;80 PSI)</h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Municipal mains can pump up to 120+ PSI down hillsides. When your Pressure Reducing
                    Valve (PRV) fails, this high pressure ruins water heater tanks, blows out washing
                    machine hoses, and causes noisy water hammer.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-700 flex items-center justify-between">
              <span className="font-semibold">Concerned about your home&apos;s pressure?</span>
              <a
                href="#get-help"
                className="text-danika-maroon font-bold hover:underline"
              >
                Schedule PRV Inspection
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section S: Plumbing Costs in Everett */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: transitionEase }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-bold text-danika-coral tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Transparent Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-danika-charcoal tracking-tight">
              What Does a Plumber Cost in Everett, WA?
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We believe in complete pricing transparency. Because every home&apos;s piping, layout, and
              access are different, we perform an in-person diagnostic and give you a guaranteed written
              price before starting.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { title: "1. Access", desc: "Is the pipe exposed in a garage or buried beneath 15 inches of concrete foundation?" },
              { title: "2. Parts & Materials", desc: "Commercial brass ball valves, Uponor PEX-A, Bradford White tanks vs basic store parts." },
              { title: "3. Permits & Code", desc: "Everett & Snohomish County building department permit fees and safety inspections." },
              { title: "4. Urgency", desc: "Standard weekday service appointments vs 2:00 AM Christmas Eve active flood dispatch." },
              { title: "5. System Age", desc: "Whether adjoining pipes are sound or crumbling cast iron requiring transition shielding." },
            ].map((factor, i) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: transitionEase }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-danika-offwhite p-5 rounded-2xl border border-neutral-200/70 space-y-2 hover:shadow-xs"
              >
                <h4 className="text-xs font-bold text-danika-charcoal uppercase tracking-wider">
                  {factor.title}
                </h4>
                <p className="text-xs text-neutral-600">
                  {factor.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-amber-900">
                Affordable Plumbing Without Cutting Corners
              </h4>
              <p className="text-xs text-amber-800">
                Financing plans available for larger repipes and tankless conversions. Never pay surprise
                hidden charges.
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#get-help"
              className="bg-danika-maroon hover:bg-danika-maroonDark text-white px-5 py-2.5 rounded-lg text-xs font-bold shrink-0 transition-colors shadow-xs"
            >
              Request Upfront Written Estimate
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Section T: Electrical Services */}
      <section id="electrical-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: transitionEase }}
          className="bg-gradient-to-br from-danika-maroon via-danika-maroonDark to-red-950 text-white rounded-3xl p-8 sm:p-12 border border-red-900/40 shadow-xl space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold text-danika-gold tracking-widest bg-white/15 px-3 py-1 rounded-full border border-white/20">
                Dual-Licensed Trade Contractor
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Electrician Services in Everett, WA
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-200 max-w-md">
              Danika now provides comprehensive residential electrical contracting under Washington
              State electrical codes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                iconBg: "bg-amber-50 text-danika-goldDark",
                title: "200A Electrical Panel Upgrades",
                desc: "Replace hazardous obsolete Federal Pacific, Zinsco, or undersized 100A fuse boxes with modern high-capacity 200-amp panels equipped with whole-home surge suppression.",
              },
              {
                icon: <Building className="w-5 h-5" />,
                iconBg: "bg-red-50 text-danika-coral",
                title: "EV Charger Installation (Level 2)",
                desc: "Dedicated 50-amp 240V circuits and wall connector installations for Tesla, Rivian, Ford, and all universal J1772 electric vehicles right in your garage or carport.",
              },
              {
                icon: <CheckCircle2 className="w-5 h-5" />,
                iconBg: "bg-emerald-50 text-emerald-600",
                title: "Generators & Whole-Home Rewiring",
                desc: "Automatic standby generator transfer switches for Pacific Northwest windstorms, knob-and-tube replacement, and lighting/outlet troubleshooting.",
              },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: transitionEase }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white text-danika-charcoal p-6 rounded-2xl shadow-md border border-neutral-100 space-y-3"
              >
                <div className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center font-bold`}>
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-danika-charcoal">{card.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
