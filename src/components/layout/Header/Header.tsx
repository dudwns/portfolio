"use client";

import { motion } from "framer-motion";
import HeaderList from "./HeaderList";
import { useScrollContext } from "@/app/context/ScrollContext";

export default function Header() {
  const { isVisible } = useScrollContext();

  return (
    <motion.nav
      className="p-4 flex justify-end items-center fixed w-full z-20 text-base 2xl:hidden"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -100,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.1 }}
    >
      <HeaderList />
    </motion.nav>
  );
}
