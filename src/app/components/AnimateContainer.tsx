"use client";
import React, { FC } from "react";
import Button from "@/components/ButtonSecondary";
import Typography from "@/components/Typography";
import { motion, MotionProps } from "framer-motion";
import isMobile from "is-mobile";
import { InView } from "react-intersection-observer";
interface IAnmate {
  children: React.ReactNode;
  delay?: number;
  type?: "slide" | "fade";
}
export default function AnimateContainer({
  children,
  delay,
  type = "slide",
}: IAnmate) {
  return (
    <motion.div
      initial={type == "slide" ? { x: 500, opacity: 0 } : { opacity: 0 }}
      animate={type == "slide" ? { x: 0, opacity: 1 } : { opacity: 1 }}
      transition={{
        delay: delay,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}
