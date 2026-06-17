import { motion } from "motion/react";

export function WatercolorBg() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--fuchsia-art), transparent 70%)" }}
        animate={{ x: [0, 60, -20, 0], y: [0, -40, 30, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-32 h-[700px] w-[700px] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--grape), transparent 70%)" }}
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0], scale: [1, 1.15, 1, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--autumn), transparent 70%)" }}
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
