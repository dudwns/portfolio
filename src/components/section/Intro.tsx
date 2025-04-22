"use client";
import { motion } from "framer-motion";
import BackgroundDecorations from "../background/BackgroundDecorations";

export default function Intro() {
  return (
    <section className="relative h-screen min-h-[800px] flex justify-center items-center overflow-hidden px-14">
      <BackgroundDecorations />

      <div className="relative w-full ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" "
        >
          <div className="flex items-center justify-between">
            <div className="w-full lg:w-[30%] h-[1px] bg-foreground/30" />
            <p className="test-xs md:text-base lg:text-lg xl:text-xl tracking-widest px-8">
              FRONTEND PORTFOLIO
            </p>
            <div className="w-full lg:w-[30%] h-[1px] bg-foreground/30" />
          </div>
        </motion.div>
        <div className="relative z-10 space-y-8 mt-30">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-bold leading-none text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem] 2xl:text-[12rem]"
          >
            KIM
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-bold text-right leading-none text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem] 2xl:text-[12rem]"
          >
            YEONG JUN
          </motion.h1>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="h-[1px] bg-foreground/30 transform origin-left mt-12"
        />
      </div>
    </section>
  );
}
