"use client";

import { useRef } from "react";
import Card from "../common/Card";
import { motion, useInView } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { PROJECT_LIST } from "@/app/data/project.json";

export default function Project() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <motion.section
      className="flex flex-col h-screen p-14 gap-20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle title="PROJECT" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4" ref={ref}>
        {PROJECT_LIST.map((item) => (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
            isCollaborative={item.isCollaborative}
            route={item.route}
          />
        ))}
      </div>
    </motion.section>
  );
}
