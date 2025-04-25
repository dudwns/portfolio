"use client";

import { motion } from "framer-motion";
import BackgroundDecorations from "../background/BackgroundDecorations";
import animationData from "../../../public/animations/scrollAnimation.json";
import { useScrollContext } from "@/app/context/ScrollContext";
import { useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Intro() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const { lastScrollY } = useScrollContext();

  return (
    <section className="relative h-screen min-h-[800px] flex justify-center items-center overflow-hidden px-14">
      <BackgroundDecorations />
      <div className="relative w-full ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between">
            <div className="w-full lg:w-[30%] h-[1px] bg-foreground/30" />
            <p className="test-xs md:text-base lg:text-lg xl:text-xl tracking-widest px-8">
              FRONTEND PORTFOLIO
            </p>
            <div className="w-full lg:w-[30%] h-[1px] bg-foreground/30" />
          </div>
        </motion.div>
        <div className="relative space-y-8 mt-30">
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
          onAnimationComplete={() => setIsAnimationComplete(true)}
        />
      </div>
      {isAnimationComplete && lastScrollY === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={lastScrollY === 0 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 mx-auto w-14 h-14 lg:w-16 lg:h-16"
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>
      )}
    </section>
  );
}
