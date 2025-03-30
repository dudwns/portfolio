"use client";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Profile from "../page/Profile";
import Lottie from "lottie-react";
import animationData from "../../../public/animations/scrollAnimation.json";

const About = () => {
  const [isH1Complete, setIsH1Complete] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <>
      <div className="flex flex-col h-screen px-14 py-20 justify-between relative">
        <div>
          <motion.h1
            className="text-4xl font-bold w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => setIsH1Complete(true)}
          >
            Front-End Developer
          </motion.h1>
          <motion.div
            className=" bottom-0 left-0 h-1 bg-foreground"
            initial={{ width: 0 }}
            animate={isH1Complete ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="h-40">
          <ReactTyped
            className="text-7xl font-bold w-full"
            strings={["YEONG JUN <div>PORTFOLIO</div>"]}
            typeSpeed={50}
            backSpeed={25}
            showCursor={false}
            onComplete={() => setIsTypingComplete(true)}
          />
        </div>
        {isTypingComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isTypingComplete ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 mx-auto w-16 h-16"
          >
            <Lottie animationData={animationData} loop={true} />
          </motion.div>
        )}
      </div>
      <Profile />
    </>
  );
};

export default About;
