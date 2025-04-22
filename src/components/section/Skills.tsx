"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import SKILLS from "@/app/data/skills.json";
import SectionTitle from "../title/SectionTitle";
import SkillList from "../list/SkillList";

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col px-14 pb-20"
    >
      <div>
        <SectionTitle id="skills" ref={ref} title="SKILLS" isInView />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <SkillList
                title={category.title}
                skills={category.skills}
                isInView={isInView}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
