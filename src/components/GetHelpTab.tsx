"use client";

import { useDrawer } from "@/context/DrawerContext";

export default function GetHelpTab() {
  const { openDrawer, isDrawerOpen } = useDrawer();

  // If drawer is already open, hide the vertical tab or keep it behind drawer
  return (
    <div
      className={`fixed right-0 top-[52%] -translate-y-1/2 z-40 transition-opacity duration-200 ${
        isDrawerOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <button
        onClick={openDrawer}
        type="button"
        id="vertical-get-help-tab"
        aria-label="Open Get Help Now contact form drawer"
        className="bg-[#d94c3d] hover:bg-[#c43f31] text-white font-extrabold text-[15px] sm:text-[16px] tracking-wider uppercase py-5 px-3 sm:px-3.5 shadow-2xl transition-all duration-150 flex items-center justify-center cursor-pointer [writing-mode:vertical-rl] rotate-180 rounded-l-md hover:pl-4 focus:outline-none focus:ring-2 focus:ring-[#ffcf5a] select-none"
      >
        GET HELP NOW
      </button>
    </div>
  );
}
