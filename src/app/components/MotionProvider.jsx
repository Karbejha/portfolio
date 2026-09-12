"use client";

import { MotionConfig } from "framer-motion";

const reducedMotion = process.env.NODE_ENV === "production" ? "user" : "never";

export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>;
}
