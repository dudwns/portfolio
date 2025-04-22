import Image from "next/image";
import { motion } from "framer-motion";

type SkillListProps = {
  title: string;
  skills: { name: string; image: string; description: string }[];
  isInView: boolean;
  index: number;
};

export default function SkillList({ title, skills, isInView, index }: SkillListProps) {
  return (
    <>
      <div className="mb-6">
        <h3 className="text-xl font-bold tracking-wider">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            whileHover={{ y: -3 }}
            transition={{
              duration: 0.5,
              delay: 0.7 + index * 0.2 + skillIndex * 0.1,
              y: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            className="bg-foreground/5 hover:bg-foreground/10 rounded-lg p-4 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md p-1 flex items-center justify-center bg-white shrink-0">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-medium">{skill.name}</h4>
                <p className="text-sm text-foreground/70">{skill.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
