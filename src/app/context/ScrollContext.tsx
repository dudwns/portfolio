"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
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
  const isMouseWheel = useRef(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleWheel = () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      isMouseWheel.current = true;

      timeoutId.current = setTimeout(() => {
        isMouseWheel.current = false;
      }, 500);
    };

    const handleClick = () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      isMouseWheel.current = false;
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("click", handleClick);

    const unsubscribeScroll = scrollY.on("change", (latest) => {
      if (isMouseWheel.current) {
        const isScrollingDown = latest > lastScrollY;
        setIsVisible(!isScrollingDown);
      }
      setLastScrollY(latest);
    });

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("click", handleClick);
      unsubscribeScroll();
    };
  }, [scrollY, lastScrollY]);

  return (
    <ScrollContext.Provider value={{ isVisible, lastScrollY }}>{children}</ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
