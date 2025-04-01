"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  isCollaborative: boolean;
  route: string;
};

export default function ProjectCard({
  image,
  title,
  description,
  isCollaborative,
  route,
}: ProjectCardProps) {
  const router = useRouter();

  return (
    <motion.div
      key={title}
      className="flex flex-col w-full h-90 bg-[#333232] mx-auto rounded-md shadow-md overflow-hidden relative group"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-full h-40 min-h-40">
        <Image src={image} alt="project" fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-xl">{title}</p>
            <span className="text-white text-xs bg-[#242323] px-2 py-1 rounded-md">
              {isCollaborative ? "Team" : "Personal"}
            </span>
          </div>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex">
          <span className="text-white text-xs bg-[#242323] px-2 py-1 rounded-md">
            {isCollaborative ? "Team" : "Personal"}
          </span>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-0.2"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <span
          className="text-white text-xl font-semibold border border-white rounded-md px-4 py-2 cursor-pointer"
          onClick={() => {
            router.push(`/projects/${route}`);
          }}
        >
          자세히 보기
        </span>
      </motion.div>
    </motion.div>
  );
}
