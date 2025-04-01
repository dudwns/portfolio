import Image from "next/image";

export default function SkillList({
  title,
  skill_list,
}: {
  title: string;
  skill_list: { name: string; image: string }[];
}) {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex flex-col justify-center gap-6 py-2">
        {skill_list.map((skill) => (
          <div className="flex items-center gap-6" key={skill.name}>
            <Image
              key={skill.name}
              src={skill.image}
              alt={skill.name}
              width={60}
              height={60}
              className="border rounded-md p-2 border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            />
            <span className="text-center text-2xl">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
