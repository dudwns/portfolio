"use client";

import { SECTION_LIST } from "@/constants/section";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollSection } from "@/hooks/useScrollSection";
import { useEffect, useState } from "react";
export default function HeaderList() {
  const [isMounted, setIsMounted] = useState(false);
  const { activeSection, scrollToSection } = useScrollSection({ sectionList: SECTION_LIST });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <ul className="flex gap-4 relative">
        {SECTION_LIST.map((list) => (
          <li key={list.id} className="relative">
            <Link href={list.id} className={`hover:text-white cursor-pointer text-gray-400`}>
              {list.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="flex gap-4 relative">
      {SECTION_LIST.map((list) => (
        <li key={list.id} className="relative">
          <Link
            href={list.id}
            onClick={(e) => scrollToSection(e, list.id)}
            className={`hover:text-white cursor-pointer ${
              activeSection === list.id ? "text-white" : "text-gray-400"
            }`}
          >
            {list.name}
          </Link>
          {activeSection === list.id && (
            <motion.div
              layoutId="underline"
              className="absolute w-full h-0.5 bg-white"
              transition={{ type: "spring", bounce: 0.2, duration: 0.1 }}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
