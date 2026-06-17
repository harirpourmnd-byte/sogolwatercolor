import { motion } from "motion/react";

// Animated SVG watercolor brush stroke that "paints in" on scroll/load
export function WatercolorBrush({ className = "", color = "var(--fuchsia-art)" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <filter id="wc-blur">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>
      <motion.path
        d="M10 40 C 80 10, 160 70, 230 35 S 360 50, 395 30"
        stroke={color}
        strokeWidth="22"
        strokeLinecap="round"
        filter="url(#wc-blur)"
        opacity="0.55"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.2, 0.8, 0.2, 1] }}
      />
    </svg>
  );
}
