"use client";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";

const Skills = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-40 px-14 h-screen pt-14"
    >
      <SectionTitle title="SKILLS" />
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-2xl font-bold">Core Technologies</h1>
          <div className="flex flex-col justify-center gap-6 py-2">
            {coreTechnologies.map((coreTechnology) => (
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
            {frameworks.map((framework) => (
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
            {stylings.map((styling) => (
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
          <h1 className="text-2xl font-bold">Development Tools</h1>
          <div className="flex flex-col justify-center gap-6 py-2">
            {tools.map((tool) => (
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
};

export default Skills;

const coreTechnologies = [
  {
    name: "HTML",
    image: "/images/skills/html.png",
  },
  {
    name: "CSS",
    image: "/images/skills/css.png",
  },
  {
    name: "JavaScript",
    image: "/images/skills/javascript.png",
  },
  {
    name: "TypeScript",
    image: "/images/skills/typescript.png",
  },
];

const frameworks = [
  {
    name: "React.js",
    image: "/images/skills/reactjs.png",
  },
  {
    name: "Next.js",
    image: "/images/skills/nextjs.png",
  },
  {
    name: "React-Query",
    image: "/images/skills/reactQuery.png",
  },
  {
    name: "React-Hook-Form",
    image: "/images/skills/reactHookForm.png",
  },
];

const stylings = [
  {
    name: "SASS",
    image: "/images/skills/sass.png",
  },
  {
    name: "Styled-Components",
    image: "/images/skills/styledComponents.jpeg",
  },
  {
    name: "Tailwind",
    image: "/images/skills/tailwindcss.png",
  },
];

const tools = [
  {
    name: "AWS",
    image: "/images/skills/aws.png",
  },
  {
    name: "Github",
    image: "/images/skills/github.png",
  },
  {
    name: "Figma",
    image: "/images/skills/figma.png",
  },
  {
    name: "Notion",
    image: "/images/skills/notion.png",
  },
  {
    name: "Jira",
    image: "/images/skills/jira.png",
  },
  {
    name: "Slack",
    image: "/images/skills/slack.png",
  },
  {
    name: "Discord",
    image: "/images/skills/discord.png",
  },
];
