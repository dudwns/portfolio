"use client";

import { ROUTE_LIST } from "@/constants/route";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const HeaderList = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4 relative">
      {ROUTE_LIST.map((list) => (
        <li key={list.path} className="relative">
          <Link
            href={list.path}
            className={`hover:text-white cursor-pointer ${
              pathname === list.path ? "text-white" : "text-gray-400"
            }`}
          >
            {list.name}
          </Link>
          {pathname === list.path && (
            <motion.div
              layoutId="underline"
              className="absolute w-full h-0.5 bg-white"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default HeaderList;
