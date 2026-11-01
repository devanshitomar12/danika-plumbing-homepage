"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { DANIKA_WAY_STEPS } from "@/data/siteData";

import { motion } from "framer-motion";
import { fadeInUpVariants, transitionEase } from "@/lib/animations";

export default function DanikaWayAndProjects() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  return (
    <section className="bg-[#1e0c0a] text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Section O: The Danika Way */}
        <div className="space-y-10 sm:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: transitionEase }}
            className="text-left max-w-4xl space-y-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#DF493A] inline-block" />
              <span className="text-xs uppercase font-bold tracking-widest text-[#DF493A]">
                THE DANIKA WAY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
              How a Plumbing Job Runs, From Your Call to a Clean Floor
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {DANIKA_WAY_STEPS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: transitionEase }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#DF493A] text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                    0{index + 1}
                  </div>
                  <h3 className="text-base font-bold text-white pt-2">{item.title}</h3>
                  <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 mt-3 border-t border-white/10 flex items-center text-[11px] font-bold text-[#DF493A]">
                  <span>Step {index + 1} of 5</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section P: Recent Plumbing Projects */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: transitionEase }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold text-danika-coral tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Real Work In Snohomish County
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-danika-charcoal">
              Recent Plumbing Projects Around Snohomish County
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Photographed on-site by our technicians Mike, Saif, and Travis across Marysville, Bothell,
              and Everett.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Marysville Water Heater Repipe */}
            <div className="bg-danika-offwhite rounded-2xl p-6 border border-neutral-200/70 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <span className="text-xs font-bold text-danika-charcoal">
                  Galvanized to Copper Water Heater Repipe
                </span>
                <span className="text-[11px] font-medium text-danika-maroon bg-white px-2.5 py-1 rounded-full">
                  Marysville, WA
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <div className="relative h-44 rounded-xl overflow-hidden border border-neutral-300">
                    <Image
                      src="/images/before-galvanized-water-heater-piping-marysville-wa.jpg"
                      alt="Before: Corroded galvanized water heater piping Marysville WA"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-neutral-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Before
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500">Corroded galvanized connection</p>
                </div>

                <div className="space-y-1.5">
                  <div className="relative h-44 rounded-xl overflow-hidden border border-emerald-500">
                    <Image
                      src="/images/after-copper-water-heater-repipe-marysville-wa.jpg"
                      alt="After: Clean copper water heater repiping Marysville WA"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      After
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500">Clean copper soldering with dielectric unions</p>
                </div>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed">
                Replaced deteriorating, restricted galvanized supply nipples with clean, code-compliant Type L
                copper piping, dielectric unions to prevent galvanic corrosion, and an expansion tank.
              </p>
            </div>

            {/* Project 2: Bothell Leaking Gate Valve Replacement */}
            <div className="bg-danika-offwhite rounded-2xl p-6 border border-neutral-200/70 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <span className="text-xs font-bold text-danika-charcoal">
                  Emergency Water Shutoff Valve Replacement
                </span>
                <span className="text-[11px] font-medium text-danika-maroon bg-white px-2.5 py-1 rounded-full">
                  Bothell, WA
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <div className="relative h-44 rounded-xl overflow-hidden border border-neutral-300">
                    <Image
                      src="/images/before-leaking-gate-valve-water-line-bothell-wa.jpg"
                      alt="Before: Leaking gate valve water line Bothell WA"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-neutral-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Before
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500">Frozen, corroded gate valve leaking</p>
                </div>

                <div className="space-y-1.5">
                  <div className="relative h-44 rounded-xl overflow-hidden border border-emerald-500">
                    <Image
                      src="/images/after-lead-free-ball-valve-replacement-bothell-wa.jpg"
                      alt="After: Lead free quarter turn ball valve replacement Bothell WA"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      After
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500">Full-port lead-free brass ball valve</p>
                </div>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed">
                Homeowner was unable to turn off a leaking line. We safely isolated the city connection and
                installed a modern commercial full-port quarter-turn ball valve for effortless shutoff.
              </p>
            </div>

            {/* Project 3: YouTube Video - Watch Our Everett Plumbers Clear a Drain Line */}
            <div className="bg-danika-offwhite rounded-2xl p-6 border border-neutral-200/70 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <span className="text-xs font-bold text-danika-charcoal">
                    Watch Our Everett Plumbers Clear a Drain Line
                  </span>
                  <span className="text-[11px] font-medium text-danika-maroon bg-white px-2.5 py-1 rounded-full">
                    Everett, WA
                  </span>
                </div>

                {/* Video Container / Thumbnail */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden border border-neutral-300 bg-black group">
                  {isPlayingVideo ? (
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/f85r98M9BW0?autoplay=1&rel=0"
                      title="Watch Our Everett Plumbers Clear a Drain Line"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsPlayingVideo(true)}
                      className="w-full h-full relative block focus:outline-none focus:ring-2 focus:ring-danika-coral group cursor-pointer"
                      aria-label="Play video: Watch Our Everett Plumbers Clear a Drain Line"
                    >
                      {/* YouTube Video Thumbnail */}
                      <img
                        src="https://i.ytimg.com/vi/f85r98M9BW0/hqdefault.jpg"
                        alt="Watch Our Everett Plumbers Clear a Drain Line"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Dark Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />

                      {/* Video Badge */}
                      <span className="absolute bottom-2 left-2 bg-danika-maroon text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
                        Video
                      </span>

                      {/* Center YouTube-style Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-13 h-9 sm:w-14 sm:h-10 bg-[#FF0000] group-hover:bg-[#CC0000] rounded-xl flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                          <Play className="w-5 h-5 text-white fill-white translate-x-0.5" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  See our licensed Everett technicians in action on a real job site as we inspect, diagnose, and clear a stubborn clogged drain line with commercial-grade drain equipment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
