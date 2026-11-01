"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  MapPin,
  FileText,
  ShieldCheck,
  Zap,
  Star,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { BUSINESS_INFO, REVIEWS_DATA } from "@/data/siteData";

export default function WhyAndTestimonials() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Touch gesture refs
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const prevReview = useCallback(() => {
    setDirection(-1);
    setCurrentReviewIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  }, []);

  const nextReview = useCallback(() => {
    setDirection(1);
    setCurrentReviewIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  }, []);

  // Temporary pause on manual interaction (resumes after 4 seconds)
  const pauseTemporarily = useCallback(() => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  }, []);

  const handlePrevClick = () => {
    pauseTemporarily();
    prevReview();
  };

  const handleNextClick = () => {
    pauseTemporarily();
    nextReview();
  };

  // Autoplay interval (advance every 5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(() => {
      setDirection(1);
      setCurrentReviewIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  // Clean up resume timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 50;
      if (distance > minSwipeDistance) {
        // Swiped left -> next review
        handleNextClick();
      } else if (distance < -minSwipeDistance) {
        // Swiped right -> prev review
        handlePrevClick();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    pauseTemporarily();
  };

  const activeReview = REVIEWS_DATA[currentReviewIndex];

  // Motion variants for smooth horizontal sliding
  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 60 : -60,
      opacity: shouldReduceMotion ? 1 : 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -60 : 60,
      opacity: shouldReduceMotion ? 1 : 0,
    }),
  };

  return (
    <section id="why-choose" className="py-20 bg-danika-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section J: Why Choose Danika */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="text-xs font-bold tracking-wider uppercase text-danika-maroon bg-white px-3 py-1 rounded-full border border-neutral-200">
              The Danika Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-danika-charcoal tracking-tight">
              Why Everett Homeowners Choose Danika Plumbing & Electric
            </h2>
            <p className="text-base text-neutral-600">
              We are an independent, locally owned shop operating right here in Snohomish County.
              Here is what sets our customer experience apart:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <MapPin className="w-6 h-6" />,
                bg: "bg-red-50 text-danika-maroon",
                title: "A Local Plumbing Company on Airport Road",
                desc: "Headquartered at 11015 Airport Road in Everett. We know Snohomish County water systems, local municipal permit departments, and typical neighborhood construction.",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                bg: "bg-amber-50 text-danika-goldDark",
                title: "A Written Price Before Work Starts",
                desc: "No ticking clock, no ambiguous ranges. After we assess your system, you get an exact written quote so you decide before any work commences.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                bg: "bg-emerald-50 text-emerald-600",
                title: "One-Year Parts and Labor Warranty",
                desc: "We stand behind our craftsmanship. Every single repair, replacement, and repipe includes our comprehensive 12-month guarantee.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                bg: "bg-blue-50 text-blue-600",
                title: "Plumbing and Electrical In-House",
                desc: "Need a 240V dedicated circuit for a tankless water heater or an EV charger? Both trades work together under one roof, saving you time and scheduling headache.",
              },
            ].map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4 hover:border-danika-maroon/30 transition-shadow hover:shadow-md"
              >
                <div className={`w-12 h-12 rounded-xl ${reason.bg} flex items-center justify-center`}>
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-danika-charcoal">
                  {reason.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Geometric Coral-Red & Light-Grey Strip immediately above Testimonials Introduction */}
      <div className="relative w-full h-12 sm:h-16 lg:h-20 bg-[#F4F3EF] overflow-hidden">
        <div
          className="absolute inset-0 bg-[#d94c3d]"
          style={{
            clipPath: "polygon(24% 0%, 100% 0%, 100% 100%, 26% 100%)",
          }}
        />
      </div>

      {/* Section K1: Testimonials Introduction (Exact Original 50/50 Full-Bleed Layout) */}
      <section className="bg-white relative w-full overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[340px] sm:min-h-[380px] lg:min-h-[420px]">
          {/* Left Column: Full-Bleed Edge-to-Edge Image (No card padding, no border, no shadow, touches left edge) */}
          <div className="relative w-full h-[280px] sm:h-[340px] lg:h-auto min-h-[280px] lg:min-h-full overflow-hidden bg-neutral-100">
            <Image
              src="/images/danika-testimonials-van-bleed.jpg"
              alt="Danika Plumbing technician beside official service truck"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-left lg:object-center"
            />
          </div>

          {/* Right Column: Clean White Background with Heading, Subhead, Description & Link */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-12 lg:px-14 xl:px-18 bg-white">
            <div className="max-w-xl space-y-4 sm:space-y-5 text-left">
              {/* Decorative line and small label: testimonials */}
              <div className="flex items-center gap-3">
                <span className="w-8 sm:w-9 h-[2px] bg-[#DF493A] inline-block" />
                <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#DF493A] lowercase">
                  testimonials
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#262626] tracking-tight leading-[1.16]">
                What People Say About Us
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-[16.5px] text-neutral-600 leading-relaxed">
                We&#39;ve performed thousands of plumbing repair jobs where even our clients are proud
                to speak up and tell you all about it.
              </p>

              {/* Underlined Link */}
              <div className="pt-1">
                <a
                  href="#testimonials"
                  className="text-sm sm:text-base font-bold text-[#8B3A2B] underline decoration-[#8B3A2B] hover:text-[#DF493A] hover:decoration-[#DF493A] transition-colors"
                >
                  Read our customer reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section K2: Customer Reviews Carousel with Original Danika Split Red-and-White Diagonal Background */}
      <div
        id="testimonials"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full overflow-hidden select-none pb-16 sm:pb-20 pt-6 sm:pt-8 bg-white -mt-px"
      >
        {/* Diagonal Bright Red Section on the Right */}
        <div
          className="absolute inset-0 pointer-events-none bg-[#d94c3d]"
          style={{
            clipPath: "polygon(38% 0%, 100% 0%, 100% 100%, 52% 100%)",
          }}
        />

        {/* Decorative White Dotted Clusters on the Red Section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute right-0 top-0 h-full w-[65%] min-w-[500px] opacity-40"
            viewBox="0 0 700 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Cluster 1: Top right stippling */}
            <g fill="#ffffff">
              <circle cx="580" cy="50" r="3.5" />
              <circle cx="595" cy="45" r="4" />
              <circle cx="610" cy="55" r="4.5" />
              <circle cx="625" cy="65" r="4" />
              <circle cx="640" cy="80" r="4" />
              <circle cx="655" cy="95" r="4.5" />
              <circle cx="665" cy="115" r="4" />
              <circle cx="600" cy="70" r="4" />
              <circle cx="615" cy="85" r="4.5" />
              <circle cx="630" cy="100" r="4.5" />
              <circle cx="645" cy="120" r="4" />
              <circle cx="660" cy="140" r="4" />
              <circle cx="585" cy="85" r="3.5" />
              <circle cx="600" cy="100" r="4" />
              <circle cx="615" cy="120" r="4" />
              <circle cx="630" cy="140" r="4.5" />
              <circle cx="645" cy="160" r="4" />
              <circle cx="570" cy="105" r="3.5" />
              <circle cx="585" cy="120" r="4" />
              <circle cx="600" cy="140" r="4" />
              <circle cx="615" cy="160" r="4.5" />
            </g>

            {/* Cluster 2: Middle-right world-map / halftone dot cloud */}
            <g fill="#ffffff">
              <circle cx="480" cy="140" r="3" />
              <circle cx="495" cy="135" r="3.5" />
              <circle cx="510" cy="145" r="4" />
              <circle cx="525" cy="155" r="4.5" />
              <circle cx="540" cy="170" r="4.5" />
              <circle cx="555" cy="185" r="4" />
              <circle cx="465" cy="160" r="3.5" />
              <circle cx="480" cy="170" r="4" />
              <circle cx="495" cy="180" r="4.5" />
              <circle cx="510" cy="195" r="4.5" />
              <circle cx="525" cy="210" r="4.5" />
              <circle cx="540" cy="225" r="4" />
              <circle cx="450" cy="180" r="3" />
              <circle cx="465" cy="195" r="3.5" />
              <circle cx="480" cy="205" r="4.5" />
              <circle cx="495" cy="220" r="4.5" />
              <circle cx="510" cy="235" r="4.5" />
              <circle cx="525" cy="250" r="4" />
              <circle cx="540" cy="265" r="3.5" />
              <circle cx="435" cy="205" r="3" />
              <circle cx="450" cy="220" r="3.5" />
              <circle cx="465" cy="230" r="4" />
              <circle cx="480" cy="245" r="4.5" />
              <circle cx="495" cy="260" r="4.5" />
              <circle cx="510" cy="275" r="4" />
              <circle cx="420" cy="230" r="3" />
              <circle cx="435" cy="245" r="3.5" />
              <circle cx="450" cy="255" r="4" />
              <circle cx="465" cy="270" r="4" />
              <circle cx="480" cy="285" r="4" />
              <circle cx="405" cy="255" r="2.5" />
              <circle cx="420" cy="270" r="3.5" />
              <circle cx="435" cy="280" r="3.5" />
              <circle cx="450" cy="295" r="4" />
              <circle cx="465" cy="310" r="4" />
              <circle cx="390" cy="280" r="2.5" />
              <circle cx="405" cy="295" r="3" />
              <circle cx="420" cy="310" r="3.5" />
              <circle cx="435" cy="325" r="4" />
              <circle cx="450" cy="340" r="3.5" />
              <circle cx="465" cy="355" r="3" />
              <circle cx="380" cy="305" r="2.5" />
              <circle cx="395" cy="320" r="3" />
              <circle cx="410" cy="335" r="3.5" />
              <circle cx="425" cy="350" r="3.5" />
              <circle cx="440" cy="365" r="3" />
            </g>

            {/* Cluster 3: Far right bottom cluster */}
            <g fill="#ffffff">
              <circle cx="610" cy="220" r="4" />
              <circle cx="625" cy="235" r="4.5" />
              <circle cx="640" cy="250" r="4.5" />
              <circle cx="655" cy="265" r="4.5" />
              <circle cx="670" cy="280" r="4" />
              <circle cx="595" cy="245" r="3.5" />
              <circle cx="610" cy="260" r="4" />
              <circle cx="625" cy="275" r="4.5" />
              <circle cx="640" cy="290" r="4.5" />
              <circle cx="655" cy="305" r="4" />
              <circle cx="580" cy="270" r="3" />
              <circle cx="595" cy="285" r="4" />
              <circle cx="610" cy="300" r="4.5" />
              <circle cx="625" cy="315" r="4" />
              <circle cx="640" cy="330" r="3.5" />
              <circle cx="565" cy="295" r="3" />
              <circle cx="580" cy="310" r="3.5" />
              <circle cx="595" cy="325" r="4" />
              <circle cx="610" cy="340" r="3.5" />
              <circle cx="550" cy="320" r="2.5" />
              <circle cx="565" cy="335" r="3" />
              <circle cx="580" cy="350" r="3.5" />
            </g>
          </svg>
        </div>

        {/* Carousel Content Container */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center">
            {/* Left Circular Arrow Button */}
            <button
              onClick={handlePrevClick}
              className="absolute -left-3 sm:-left-6 md:-left-8 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-neutral-600 hover:text-neutral-900 shadow-md flex items-center justify-center border border-neutral-200 hover:border-neutral-300 transition-all focus:outline-none focus:ring-2 focus:ring-danika-coral/50"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Sliding Review Cards Track */}
            <div className="w-full overflow-hidden px-4 sm:px-6">
              <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                <motion.div
                  key={currentReviewIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 280, damping: 28 },
                    opacity: { duration: shouldReduceMotion ? 0 : 0.25 },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full"
                >
                  {/* Card 1 */}
                  {(() => {
                    const review = REVIEWS_DATA[currentReviewIndex];
                    if (!review) return null;
                    return (
                      <div className="bg-[#f0f0f2] rounded-2xl p-6 sm:p-7 shadow-sm border border-neutral-200/60 flex flex-col justify-between min-h-[260px] text-left">
                        <div>
                          {/* Card Top: Customer Avatar/Initial, Name, Date, Google Logo */}
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3">
                              {review.avatar && review.avatar.startsWith("/") ? (
                                <div className="w-11 h-11 rounded-full overflow-hidden relative border border-neutral-300 bg-neutral-200 shrink-0">
                                  <Image
                                    src={review.avatar}
                                    alt={review.author}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="w-11 h-11 rounded-full bg-neutral-600 text-white font-semibold flex items-center justify-center text-lg shrink-0">
                                  {review.avatar || review.author.charAt(0)}
                                </div>
                              )}
                              <div>
                                <h4 className="font-bold text-danika-charcoal text-base leading-snug">
                                  {review.author}
                                </h4>
                                <p className="text-xs text-neutral-500 font-medium">
                                  {review.date}
                                </p>
                              </div>
                            </div>

                            {/* Google 4-Color Logo */}
                            <svg className="w-6 h-6 shrink-0 mt-0.5" viewBox="0 0 24 24">
                              <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.34z"
                              />
                              <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                              />
                              <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                              />
                            </svg>
                          </div>

                          {/* 5 Yellow Stars */}
                          <div className="flex items-center gap-1 text-[#F4B400] mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                            ))}
                          </div>

                          {/* Review Text */}
                          <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                            {review.content}
                          </p>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Card 2 (Desktop / Tablet second review) */}
                  {(() => {
                    const secondIndex = (currentReviewIndex + 1) % REVIEWS_DATA.length;
                    const review = REVIEWS_DATA[secondIndex];
                    if (!review) return null;
                    return (
                      <div className="hidden md:flex bg-[#f0f0f2] rounded-2xl p-6 sm:p-7 shadow-sm border border-neutral-200/60 flex-col justify-between min-h-[260px] text-left">
                        <div>
                          {/* Card Top: Customer Avatar/Initial, Name, Date, Google Logo */}
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3">
                              {review.avatar && review.avatar.startsWith("/") ? (
                                <div className="w-11 h-11 rounded-full overflow-hidden relative border border-neutral-300 bg-neutral-200 shrink-0">
                                  <Image
                                    src={review.avatar}
                                    alt={review.author}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="w-11 h-11 rounded-full bg-neutral-600 text-white font-semibold flex items-center justify-center text-lg shrink-0">
                                  {review.avatar || review.author.charAt(0)}
                                </div>
                              )}
                              <div>
                                <h4 className="font-bold text-danika-charcoal text-base leading-snug">
                                  {review.author}
                                </h4>
                                <p className="text-xs text-neutral-500 font-medium">
                                  {review.date}
                                </p>
                              </div>
                            </div>

                            {/* Google 4-Color Logo */}
                            <svg className="w-6 h-6 shrink-0 mt-0.5" viewBox="0 0 24 24">
                              <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.34z"
                              />
                              <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                              />
                              <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                              />
                            </svg>
                          </div>

                          {/* 5 Yellow Stars */}
                          <div className="flex items-center gap-1 text-[#F4B400] mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                            ))}
                          </div>

                          {/* Review Text */}
                          <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                            {review.content.length > 150 ? (
                              <>
                                {review.content.slice(0, 145)}...
                                <span className="block mt-2 text-xs font-semibold text-neutral-500 cursor-pointer hover:text-danika-charcoal">
                                  Read more
                                </span>
                              </>
                            ) : (
                              review.content
                            )}
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Circular Arrow Button */}
            <button
              onClick={handleNextClick}
              className="absolute -right-3 sm:-right-6 md:-right-8 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-neutral-600 hover:text-neutral-900 shadow-md flex items-center justify-center border border-neutral-200 hover:border-neutral-300 transition-all focus:outline-none focus:ring-2 focus:ring-danika-coral/50"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Rating Caption below cards */}
          <div className="mt-8 text-center">
            <p className="text-sm sm:text-base text-neutral-800 font-medium">
              <span className="font-bold">Trustindex</span> rating score:{" "}
              <span className="font-bold">4.7</span> of 5, based on{" "}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline text-neutral-900 hover:text-danika-maroon transition-colors"
              >
                699 reviews
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section L: Licence and Registration Card */}
        <div className="bg-gradient-to-br from-danika-maroon via-danika-maroonDark to-red-950 text-white rounded-3xl p-8 sm:p-12 border border-red-900/40 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase font-bold text-danika-gold tracking-widest bg-white/10 px-3 py-1 rounded-full">
                Contractor Credential Verification
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Licensed, Registered, and Locally Accountable in Everett
              </h2>
              <p className="text-sm sm:text-base text-neutral-100 leading-relaxed">
                Washington State requires strict licensing, continuous bonding, and liability
                insurance for both plumbing and electrical contractors. Danika Plumbing & Electric
                holds active credentials with the Washington State Department of Labor & Industries.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-danika-coral pl-4 space-y-1">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Journeyman & Master Plumbers
                  </h4>
                  <p className="text-xs text-neutral-200">
                    Washington certifies plumbers with thousands of logged hours of classroom study
                    and field experience.
                  </p>
                </div>
                <div className="border-l-2 border-danika-gold pl-4 space-y-1">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Dual Plumbing & Electrical
                  </h4>
                  <p className="text-xs text-neutral-200">
                    Fully authorized to perform high-voltage service panels, generators, and complex
                    commercial work.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white text-danika-charcoal p-7 rounded-2xl shadow-xl space-y-4 text-center">
              <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider">WA Contractor License</p>
              <div className="text-2xl sm:text-3xl font-black text-danika-maroon font-mono tracking-wider">
                {BUSINESS_INFO.license}
              </div>
              <p className="text-xs text-neutral-600 font-medium">
                Danika Plumbing, LLC &middot; Active & Bonded
              </p>
              <a
                href={BUSINESS_INFO.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-danika-coral hover:bg-danika-coralHover text-white text-xs font-bold rounded-xl shadow-md transition-colors"
              >
                <span>Verify on WA L&I Database</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
