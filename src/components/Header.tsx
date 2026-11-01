"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";
import { useDrawer } from "@/context/DrawerContext";

import { motion } from "framer-motion";

export default function Header() {
  const { openDrawer } = useDrawer();
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [plumbingDropdown, setPlumbingDropdown] = useState(false);
  const [electricalDropdown, setElectricalDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Contact bar is approx 38px high. When scrolled past 38px, fix the navbar to the top.
      setIsFixed(window.scrollY > 38);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full relative z-[1000]">
      {/* 1. Maroon Contact Information Strip across the top: Scrolls away naturally, NEVER sticky or fixed */}
      <div className="bg-danika-maroon text-white text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Phone */}
          <div className="flex items-center gap-1.5 font-medium">
            <span className="font-semibold underline text-white decoration-white/70">Call us:</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hover:underline text-white font-semibold"
              id="top-bar-phone"
            >
              (425) 374-1557
            </a>
          </div>

          {/* Middle: Email */}
          <div className="hidden md:flex items-center gap-1.5 font-medium text-white/95">
            <span className="font-semibold underline text-white decoration-white/70">Email us:</span>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hover:underline text-white"
              id="top-bar-email"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-3.5 text-white/90">
            <span className="hidden sm:inline text-xs font-semibold">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/DanikaPlumbing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-amber-200 transition-colors inline-block"
              >
                <svg width="14" height="14" className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/DanikaCo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="hover:text-amber-200 transition-colors inline-block"
              >
                <svg width="14" height="14" className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/danikaplumbing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-amber-200 transition-colors inline-block"
              >
                <svg width="14" height="14" className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@DanikaPlumbing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-amber-200 transition-colors inline-block"
              >
                <svg width="14" height="14" className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder height compensation when navbar is fixed, preventing layout jumps */}
      {isFixed && (
        <div
          aria-hidden="true"
          className="w-full h-[64px] sm:h-[72px] md:h-[88px] invisible pointer-events-none"
        />
      )}

      {/* 2. White Navigation Section: Position Fixed at top: 0 after scrolling past contact bar */}
      <nav
        className={`w-full bg-white transition-shadow duration-200 ${
          isFixed
            ? "fixed top-0 left-0 right-0 z-[1000] shadow-md border-b border-neutral-200/90"
            : "relative z-10 border-b border-neutral-100"
        }`}
      >
        <div className="flex items-stretch justify-between w-full">
          {/* Original Danika Maroon Angled Logo Block */}
          <Link
            href="/"
            className="relative flex items-center bg-danika-maroon px-4 sm:px-6 md:px-8 py-2 md:py-3 shrink-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)",
            }}
            id="brand-logo-link"
          >
            <div className="relative w-36 sm:w-48 md:w-56 h-12 sm:h-14 md:h-16 mr-4 sm:mr-6">
              <Image
                src="/images/danika-original-logo.png"
                alt="Danika Plumbing & Electric"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (Original Danika Menu) */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-9 pl-4 pr-6">
            <Link
              href="/"
              className="text-danika-coral font-bold text-base hover:text-danika-maroon transition-colors"
            >
              Home
            </Link>

            {/* Plumbing Services Dropdown */}
            <div
              className="relative group py-5"
              onMouseEnter={() => setPlumbingDropdown(true)}
              onMouseLeave={() => setPlumbingDropdown(false)}
            >
              <button
                className="flex items-center gap-1 text-danika-maroon hover:text-danika-coral font-bold text-base transition-colors"
                aria-expanded={plumbingDropdown}
              >
                <span>Plumbing Services</span>
                <ChevronDown className="w-4 h-4 text-danika-maroon group-hover:text-danika-coral transition-transform group-hover:rotate-180" />
              </button>

              {/* Exact Original Dropdown Menu */}
              <div
                className={`absolute left-0 top-full w-[275px] bg-white rounded-md shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2),0_8px_10px_-6px_rgba(0,0,0,0.1)] border border-neutral-100/80 py-1 transition-all duration-200 z-50 ${
                  plumbingDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible pointer-events-none translate-y-1"
                }`}
              >
                {[
                  { name: "Commercial Plumbing", href: "#emergency" },
                  { name: "Drain Cleaning", href: "#drain-sewer" },
                  { name: "Emergency Plumber", href: "#emergency" },
                  { name: "French Drain Services", href: "#drain-sewer" },
                  { name: "Gas Line Services", href: "#gas-fixtures" },
                  { name: "Hydro Jetting Services", href: "#drain-sewer" },
                  { name: "Leak Detection", href: "#water-lines" },
                  { name: "Pipe Repair Services", href: "#water-lines" },
                  { name: "Plumbing Remodeling", href: "#gas-fixtures" },
                  { name: "Plumbing fixtures", href: "#gas-fixtures" },
                  { name: "Repiping Services", href: "#water-lines" },
                  { name: "Sewer Repair Services", href: "#drain-sewer" },
                  { name: "Sump Pump Services", href: "#drain-sewer" },
                  { name: "Water Line Repair", href: "#water-lines" },
                  { name: "Water Heater Services", href: "#water-heaters" },
                ].map((item, idx, arr) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between px-5 py-2.5 text-[#913428] hover:text-[#d94c3d] hover:bg-neutral-50/80 transition-colors group/item"
                    >
                      <span className="font-bold text-[14.5px] leading-snug tracking-tight">{item.name}</span>
                      <span className="text-[#913428] group-hover/item:text-[#d94c3d] font-bold text-base transition-transform group-hover/item:translate-x-0.5 leading-none">
                        &gt;
                      </span>
                    </a>
                    {idx < arr.length - 1 && <div className="border-t border-neutral-200/70 mx-4" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Electrical Services Dropdown */}
            <div
              className="relative group py-5"
              onMouseEnter={() => setElectricalDropdown(true)}
              onMouseLeave={() => setElectricalDropdown(false)}
            >
              <button
                className="flex items-center gap-1 text-danika-maroon hover:text-danika-coral font-bold text-base transition-colors"
                aria-expanded={electricalDropdown}
              >
                <span>Electrical Services</span>
                <ChevronDown className="w-4 h-4 text-danika-maroon group-hover:text-danika-coral transition-transform group-hover:rotate-180" />
              </button>

              {/* Exact Original Dropdown Menu */}
              <div
                className={`absolute left-0 top-full w-[275px] bg-white rounded-md shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2),0_8px_10px_-6px_rgba(0,0,0,0.1)] border border-neutral-100/80 py-1 transition-all duration-200 z-50 ${
                  electricalDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible pointer-events-none translate-y-1"
                }`}
              >
                {[
                  { name: "Electrical Panel Upgrades", href: "#electrical-services" },
                  { name: "EV Charger Installation", href: "#electrical-services" },
                  { name: "Electrical Repair", href: "#electrical-services" },
                  { name: "Emergency Electrician", href: "#electrical-services" },
                  { name: "Generator Installation", href: "#electrical-services" },
                  { name: "Whole-Home Rewiring", href: "#electrical-services" },
                  { name: "Safety Inspections", href: "#electrical-services" },
                  { name: "Lighting Installation", href: "#electrical-services" },
                ].map((item, idx, arr) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between px-5 py-2.5 text-[#913428] hover:text-[#d94c3d] hover:bg-neutral-50/80 transition-colors group/item"
                    >
                      <span className="font-bold text-[14.5px] leading-snug tracking-tight">{item.name}</span>
                      <span className="text-[#913428] group-hover/item:text-[#d94c3d] font-bold text-base transition-transform group-hover/item:translate-x-0.5 leading-none">
                        &gt;
                      </span>
                    </a>
                    {idx < arr.length - 1 && <div className="border-t border-neutral-200/70 mx-4" />}
                  </div>
                ))}
              </div>
            </div>

            {/* About Us Dropdown */}
            <div
              className="relative group py-5"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button
                className="flex items-center gap-1 text-danika-maroon hover:text-danika-coral font-bold text-base transition-colors"
                aria-expanded={aboutDropdown}
              >
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 text-danika-maroon group-hover:text-danika-coral transition-transform group-hover:rotate-180" />
              </button>

              {/* Exact Original Dropdown Menu */}
              <div
                className={`absolute left-0 top-full w-[250px] bg-white rounded-md shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2),0_8px_10px_-6px_rgba(0,0,0,0.1)] border border-neutral-100/80 py-1 transition-all duration-200 z-50 ${
                  aboutDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible pointer-events-none translate-y-1"
                }`}
              >
                {[
                  { name: "Plumbing Financing", href: "#emergency" },
                  { name: "Contact Us", href: "#contact-location" },
                  { name: "Projects", href: "#projects" },
                  { name: "Reviews", href: "#testimonials" },
                  { name: "Blog", href: "#faq" },
                  { name: "Service Areas", href: "#service-areas" },
                ].map((item, idx, arr) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between px-5 py-2.5 text-[#913428] hover:text-[#d94c3d] hover:bg-neutral-50/80 transition-colors group/item"
                    >
                      <span className="font-bold text-[14.5px] leading-snug tracking-tight">{item.name}</span>
                      <span className="text-[#913428] group-hover/item:text-[#d94c3d] font-bold text-base transition-transform group-hover/item:translate-x-0.5 leading-none">
                        &gt;
                      </span>
                    </a>
                    {idx < arr.length - 1 && <div className="border-t border-neutral-200/70 mx-4" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Red Outlined Schedule Online Button (Original Danika Style) */}
          <div className="hidden sm:flex items-center pr-6">
            <button
              type="button"
              onClick={openDrawer}
              className="border-2 border-danika-coral text-danika-coral hover:bg-danika-coral hover:text-white text-base font-bold px-6 py-2.5 rounded transition-all duration-200 cursor-pointer"
              id="header-schedule-btn"
            >
              Schedule Online
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center lg:hidden pr-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-danika-maroon focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 px-6 py-4 space-y-3 animate-fadeIn">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-danika-coral py-2 border-b border-neutral-100"
            >
              Home
            </Link>
            <a
              href="#water-heaters"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-danika-maroon py-2 border-b border-neutral-100"
            >
              Plumbing Services
            </a>
            <a
              href="#electrical-services"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-danika-maroon py-2 border-b border-neutral-100"
            >
              Electrical Services
            </a>
            <a
              href="#why-choose"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-danika-maroon py-2 border-b border-neutral-100"
            >
              About Us
            </a>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDrawer();
                }}
                className="w-full text-center border-2 border-danika-coral text-danika-coral font-bold py-2.5 rounded hover:bg-danika-coral hover:text-white transition-colors cursor-pointer"
              >
                Schedule Online
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
