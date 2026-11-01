"use client";

import { Phone, Calendar } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";
import { useDrawer } from "@/context/DrawerContext";

export default function StickyCallCTA() {
  const { openDrawer } = useDrawer();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-neutral-200 py-2.5 px-4 sm:hidden shadow-2xl flex items-center gap-3">
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="flex-1 bg-danika-coral hover:bg-danika-coralHover text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition-all active:scale-95"
      >
        <Phone className="w-4 h-4 animate-bounce" />
        <span>Call (425) 374-1557</span>
      </a>
      <button
        type="button"
        onClick={openDrawer}
        aria-label="Open Get Help Now form drawer"
        className="bg-danika-charcoal text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center text-sm shadow-sm transition-all cursor-pointer"
      >
        <Calendar className="w-4 h-4 text-danika-gold" />
      </button>
    </div>
  );
}
