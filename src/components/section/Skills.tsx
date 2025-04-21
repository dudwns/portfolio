"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../title/SectionTitle";
import { SKILLS } from "@/app/data/skills.json";
import SkillList from "../list/SkillList";

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col px-14"
    >
      <SectionTitle title="SKILLS" />
      <div
        className="flex justify-between flex-col gap-10 items-center pt-30 pb-70 xl:flex-row xl:items-start xl:gap-0 "
        ref={ref}
      >
        <SkillList title="Core Technologies" skill_list={SKILLS.CORE_TECHNOLOGIES} />
        <SkillList title="Libraries & Frameworks" skill_list={SKILLS.FRAMEWORKS} />
        <SkillList title="Styling" skill_list={SKILLS.STYLINGS} />
        <SkillList title="Tools" skill_list={SKILLS.TOOLS} />
      </div>
    </motion.section>
  );
}
