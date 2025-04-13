import Image from "next/image";

type SkillListProps = {
  title: string;
  skill_list: { name: string; image: string; description: string }[];
};

export default function SkillList({ title, skill_list }: SkillListProps) {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex flex-col justify-center gap-6 py-2">
        {skill_list.map((skill) => (
          <div className="flex items-center gap-6" key={skill.name}>
            <div className="relative group">
              <Image
                key={skill.name}
                src={skill.image}
                alt={skill.name}
                width={60}
                height={60}
                className="border rounded-md p-2 border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              />
              <div
                className={`absolute w-max top-1/2 max-w-xs border border-gray-300
                            px-3 py-2 bg-[#333232] text-white text-sm rounded-md 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            pointer-events-none z-50 text-justify
                            ${title === "Tools" ? "right-1/2 " : "left-1/2"}`}
              >
                {skill.description}
              </div>
            </div>
            <span className="text-center text-2xl">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
