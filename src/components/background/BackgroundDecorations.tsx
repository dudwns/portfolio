"use client";
import { motion } from "framer-motion";

interface BackgroundDecorationsProps {
  isInView?: boolean;
}

export default function BackgroundDecorations({ isInView = true }: BackgroundDecorationsProps) {
  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-[-20%] top-[-20%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] rounded-full border-[1px] border-foreground"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.05 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute left-[-10%] bottom-[-20%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-full border-[1px] border-foreground"
      />
      <div className="absolute inset-0 grid grid-cols-6 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-r border-foreground last:border-r-0"
          />
        ))}
      </div>
    </>
  );
}
