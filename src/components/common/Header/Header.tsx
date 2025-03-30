"use client";

import { motion } from "framer-motion";
import HeaderList from "./HeaderList";
import { useScrollContext } from "@/app/context/ScrollContext";

const Header = () => {
  const { isVisible } = useScrollContext();

  return (
    <motion.nav
      className="p-4 flex justify-end items-center fixed w-full z-10 text-base"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.1 }}
    >
      <HeaderList />
    </motion.nav>
  );
};

export default Header;
