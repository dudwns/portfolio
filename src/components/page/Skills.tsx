"use client";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";
import { SKILLS } from "@/app/data/skills.json";

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-20 px-14 h-screen pt-14"
    >
      <SectionTitle title="SKILLS" />
      <div className="flex justify-between w-full" ref={ref}>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-2xl font-bold">Core Technologies</h1>
          <div className="flex flex-col justify-center gap-6 py-2">
            {SKILLS.CORE_TECHNOLOGIES.map((coreTechnology) => (
              <div className="flex items-center gap-6" key={coreTechnology.name}>
                <Image
                  key={coreTechnology.name}
                  src={coreTechnology.image}
                  alt={coreTechnology.name}
                  width={60}
                  height={60}
                  className="border rounded-md p-2 border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                />

                <span className="text-center text-2xl">{coreTechnology.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-2xl font-bold">Libraries & Frameworks</h1>
          <div className="flex flex-col justify-center gap-6 py-2">
            {SKILLS.FRAMEWORKS.map((framework) => (
              <div className="flex items-center gap-6" key={framework.name}>
                <Image
                  key={framework.name}
                  src={framework.image}
                  alt={framework.name}
                  width={60}
                  height={60}
                  className="border rounded-md p-2 border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                />
                <span className="text-center text-2xl">{framework.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-2xl font-bold">Styling</h1>
          <div className="flex flex-col justify-center gap-6 py-2">
            {SKILLS.STYLINGS.map((styling) => (
              <div className="flex items-center gap-6" key={styling.name}>
                <Image
                  key={styling.name}
                  src={styling.image}
                  alt={styling.name}
                  width={60}
                  height={60}
                  className="border rounded-md p-2 border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                />
                <span className="text-center text-2xl">{styling.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-2xl font-bold">Tools</h1>
          <div className="flex flex-col justify-center gap-6 py-2">
            {SKILLS.TOOLS.map((tool) => (
              <div className="flex items-center gap-6" key={tool.name}>
                <Image
                  key={tool.name}
                  src={tool.image}
                  alt={tool.name}
                  width={60}
                  height={60}
                  className="border rounded-md p-2 border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                />
                <span className="text-center text-2xl">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
