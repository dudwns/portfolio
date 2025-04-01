"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useScroll } from "framer-motion";

type ScrollContextType = {
  isVisible: boolean;
  lastScrollY: number;
};

const ScrollContext = createContext<ScrollContextType>({ isVisible: true, lastScrollY: 0 });

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    return scrollY.on("change", (latest) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const isScrollingDown = latest > lastScrollY;
        setIsVisible(!isScrollingDown);
        setLastScrollY(latest);
      }, 100);
    });
  }, [scrollY, lastScrollY]);

  return (
    <ScrollContext.Provider value={{ isVisible, lastScrollY }}>{children}</ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
