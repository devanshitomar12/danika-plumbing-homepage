"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

// Standard eased transitions matching specifications
export const transitionEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

// Common reusable variants
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: transitionEase },
  },
};

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: transitionEase },
  },
};

export const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: transitionEase },
  },
};

export const fadeInScaleVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: transitionEase },
  },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const imageZoomVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.4, ease: transitionEase } },
};

// Reusable animated wrapper for scroll sections
export function ScrollReveal({
  children,
  className = "",
  variants = fadeInUpVariants,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
