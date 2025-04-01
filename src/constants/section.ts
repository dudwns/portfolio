export type SectionList = {
  name: string;
  id: string;
};

export const SECTION_LIST: SectionList[] = [
  { name: "ABOUT", id: "about" },
  { name: "SKILLS", id: "skills" },
  { name: "PROJECT", id: "project" },
] as const;
