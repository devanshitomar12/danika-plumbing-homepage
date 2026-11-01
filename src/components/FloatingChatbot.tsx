"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Calendar,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Wrench,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";
import { useDrawer } from "@/context/DrawerContext";

export default function FloatingChatbot() {
  // Expanded by default (shows the 5 red action buttons), collapsible to compact pill
  const [isExpanded, setIsExpanded] = useState(true);
  const { openDrawer } = useDrawer();

  return (
    <aside
      className="fixed bottom-0 right-3 sm:right-6 z-40 select-none pointer-events-auto"
      aria-label="Danika customer assistance chatbot"
    >
      {/* 
        Chatbot Panel:
        - Light grey rounded card (#d4d2cc / #dcdad4)
        - Danika circular logo badge overlapping the top center in a pill
        - Upper right small grey square button with black border and chevron
        - "Hello! How can we help you?"
        - When EXPANDED: displays the 5 red buttons vertically
        - When COLLAPSED: hides the 5 buttons, displaying only the greeting & chevron
      */}
      <div className="relative w-64 sm:w-72 bg-[#cfcdc7] text-neutral-900 rounded-t-2xl shadow-2xl p-4 pb-5 transition-all duration-200">
        
        {/* Danika circular logo badge overlapping top center */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#8f3328] border-2 border-white shadow-md flex items-center justify-center p-2 z-10 overflow-hidden">
          <Image
            src="/images/danika-original-logo.png"
            alt="Danika Logo"
            width={44}
            height={44}
            className="object-contain"
          />
        </div>

        {/* Small square chevron button in the upper-right corner */}
        <div className="flex justify-end pt-0.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            id="chatbot-toggle-btn"
            aria-label={isExpanded ? "Collapse chatbot" : "Expand chatbot"}
            className="w-7 h-7 bg-[#cfcdc7] hover:bg-[#c2c0ba] border-2 border-neutral-800 rounded-xs flex items-center justify-center text-neutral-900 transition-colors cursor-pointer"
          >
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 stroke-[2.8]" />
            ) : (
              <ChevronUp className="w-5 h-5 stroke-[2.8]" />
            )}
          </button>
        </div>

        {/* Greeting Text */}
        <p className="text-center font-bold text-sm sm:text-[15px] text-neutral-900 mt-1 mb-3">
          Hello! How can we help you?
        </p>

        {/* Five Coral-Red Action Buttons (Displayed only in EXPANDED state) */}
        {isExpanded && (
          <div className="space-y-2 pt-1 animate-fadeIn">
            {/* 1. Start Quote Online */}
            <a
              href="#get-help"
              className="w-full bg-[#d94c3d] hover:bg-[#c43f31] text-white text-xs sm:text-[13px] font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2.5 shadow-sm transition-all"
            >
              <DollarSign className="w-4 h-4 stroke-[2.5]" />
              <span>Start Quote Online</span>
            </a>

            {/* 2. Schedule Service */}
            <button
              type="button"
              onClick={openDrawer}
              className="w-full bg-[#d94c3d] hover:bg-[#c43f31] text-white text-xs sm:text-[13px] font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 stroke-[2.2]" />
              <span>Schedule Service</span>
            </button>

            {/* 3. Request a Call */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full bg-[#d94c3d] hover:bg-[#c43f31] text-white text-xs sm:text-[13px] font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2.5 shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Request a Call</span>
            </a>

            {/* 4. Call Contractor */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full bg-[#d94c3d] hover:bg-[#c43f31] text-white text-xs sm:text-[13px] font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2.5 shadow-sm transition-all"
            >
              <Wrench className="w-4 h-4 stroke-[2.2]" />
              <span>Call Contractor</span>
            </a>

            {/* 5. Message Us (opens contact drawer) */}
            <button
              type="button"
              onClick={openDrawer}
              className="w-full bg-[#d94c3d] hover:bg-[#c43f31] text-white text-xs sm:text-[13px] font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 stroke-[2.2]" />
              <span>Message Us</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
