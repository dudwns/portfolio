"use client";

import { SECTION_LIST } from "@/constants/section";
import { useScrollSection } from "@/hooks/useScrollSection";

function SideNavigation() {
  const { activeSection, scrollToSection } = useScrollSection({ sectionList: SECTION_LIST });

  return (
    <nav className="sticky top-0 left-8 h-screen pt-6 hidden 2xl:block">
      <ul className="flex flex-col gap-4 text-5xl font-semibold">
        {SECTION_LIST.map((section) => (
          <li
            key={section.id}
            onClick={(e) => scrollToSection(e, section.id)}
            className={`cursor-pointer hover:text-foreground ${
              activeSection === section.id ? "text-foreground" : "text-foreground/50"
            }`}
          >
            {section.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNavigation;
