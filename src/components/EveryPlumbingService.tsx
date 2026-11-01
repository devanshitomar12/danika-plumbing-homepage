"use client";

import { motion } from "framer-motion";
import { transitionEase } from "@/lib/animations";

interface ServiceLink {
  name: string;
  href: string;
}

const SERVICE_LINKS: ServiceLink[] = [
  // Row 1
  { name: "Emergency Plumber", href: "https://danikaplumbing.com/emergency-plumber/" },
  { name: "Drain Cleaning", href: "https://danikaplumbing.com/drain-cleaning/" },
  { name: "Hydro Jetting", href: "https://danikaplumbing.com/hydro-jetting/" },
  { name: "Sewer Repair", href: "https://danikaplumbing.com/sewer-repair/" },
  // Row 2
  { name: "Water Heater Services", href: "https://danikaplumbing.com/water-heater-services/" },
  { name: "Tankless Water Heaters", href: "https://danikaplumbing.com/tankless-water-heaters/" },
  { name: "Water Line Repair", href: "https://danikaplumbing.com/water-line-repair/" },
  { name: "Repiping", href: "https://danikaplumbing.com/repiping/" },
  // Row 3
  { name: "Pipe Repair", href: "https://danikaplumbing.com/pipe-repair/" },
  { name: "Leak Detection", href: "https://danikaplumbing.com/leak-detection/" },
  { name: "Gas Line Services", href: "https://danikaplumbing.com/gas-line-services/" },
  { name: "Sump Pump Services", href: "https://danikaplumbing.com/sump-pump-services/" },
  // Row 4
  { name: "French Drain Services", href: "https://danikaplumbing.com/french-drain-services/" },
  { name: "Shower Repair & Installation", href: "https://danikaplumbing.com/shower-repair-installation/" },
  { name: "Frozen Pipe Repair", href: "https://danikaplumbing.com/frozen-pipe-repair/" },
  { name: "Commercial Plumbing", href: "https://danikaplumbing.com/commercial-plumbing/" },
];

export default function EveryPlumbingService() {
  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 border-t border-neutral-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Left-Aligned Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: transitionEase }}
          className="text-2xl sm:text-3xl font-extrabold text-[#262626] tracking-tight"
        >
          Every plumbing service, one call
        </motion.h2>

        {/* 16 Service Links Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {SERVICE_LINKS.map((service, index) => (
            <motion.a
              key={service.name}
              href={service.href}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.45,
                delay: (index % 4) * 0.06,
                ease: transitionEase,
              }}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="group bg-white rounded-xl border border-neutral-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] px-5 py-4 flex items-center justify-between gap-3 transition-all hover:border-[#DF493A]/50 hover:shadow-md cursor-pointer"
            >
              <span className="font-semibold text-[14.5px] sm:text-[15px] text-[#262626] group-hover:text-[#8B3A2B] transition-colors leading-snug">
                {service.name}
              </span>
              <span
                aria-hidden="true"
                className="text-[#DF493A] font-bold text-base transition-transform duration-200 group-hover:translate-x-1 shrink-0 select-none leading-none"
              >
                &rarr;
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

