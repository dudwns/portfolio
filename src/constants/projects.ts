import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRecoil,
  SiReactquery,
  SiStyledcomponents,
} from "react-icons/si";
import { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";

export const PROJECT_BACKGROUND_COLOR: Record<string, string> = {
  linkhub: "bg-emerald-400",
  angola: "bg-gray-400",
  portfolio: "bg-red-400",
  mealkitary: "bg-blue-400",
  notion: "bg-yellow-400",
} as const;

type SkillInfo = {
  icon: IconType;
  color: string;
  bgColor: string;
};

export const SKILL_INFO: Record<string, SkillInfo> = {
  JavaScript: {
    icon: SiJavascript,
    color: "text-black",
    bgColor: "bg-yellow-300",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "text-white",
    bgColor: "bg-blue-500",
  },
  React: {
    icon: SiReact,
    color: "text-white",
    bgColor: "bg-cyan-400",
  },
  Next: {
    icon: SiNextdotjs,
    color: "text-white",
    bgColor: "bg-black",
  },
  Tailwind: {
    icon: SiTailwindcss,
    color: "text-white",
    bgColor: "bg-cyan-600",
  },

  Recoil: {
    icon: SiRecoil,
    color: "text-white",
    bgColor: "bg-purple-500",
  },
  "React Query": {
    icon: SiReactquery,
    color: "text-white",
    bgColor: "bg-red-400",
  },
  AWS: {
    icon: FaAws,
    color: "text-white",
    bgColor: "bg-orange-500",
  },
  "Styled Components": {
    icon: SiStyledcomponents,
    color: "text-white",
    bgColor: "bg-pink-400",
  },
} as const;
