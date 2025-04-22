"use client";

import { useRef } from "react";
import ProjectCard from "../card/ProjectCard";
import { motion, useInView } from "framer-motion";
import SectionTitle from "../title/SectionTitle";
import { PROJECT_LIST } from "@/app/data/project.json";

export default function Project() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      className="flex flex-col px-14"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle id="project" ref={ref} title="PROJECT" isInView />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4  pb-60">
        {PROJECT_LIST.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <ProjectCard
              image={item.image}
              title={item.title}
              description={item.description}
              isCollaborative={item.isCollaborative}
              route={item.route}
              skills={item.skills}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
