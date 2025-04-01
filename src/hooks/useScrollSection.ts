import { SectionList } from "@/constants/section";
import { useEffect, useState } from "react";

export const useScrollSection = ({ sectionList }: { sectionList: SectionList[] }) => {
  const [activeSection, setActiveSection] = useState<string>("about");

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "56px 0px 0px 0px",
      }
    );

    sectionList.forEach((section) => {
      const element = document.querySelector(`#${section.id}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionList]);

  return { activeSection, scrollToSection };
};
