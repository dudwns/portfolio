import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  isInView: boolean;
};

export default function SectionTitle({ title, isInView }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <div className="flex items-center gap-8">
        <div className="w-12 h-[1px] bg-foreground/30" />
        <h2 className="text-3xl font-bold tracking-widest">{title}</h2>
        <div className="flex-1 h-[1px] bg-foreground/30" />
      </div>
    </motion.div>
  );
}
