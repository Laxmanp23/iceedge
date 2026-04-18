"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionFadeProps = {
  children: ReactNode;
  className?: string;
};

export function MotionFade({ children, className }: MotionFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
