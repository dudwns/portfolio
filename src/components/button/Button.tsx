"use client";

import { useRouter } from "next/navigation";

export default function Button({
  children,
  onClick,
  className,
  isBack,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isBack?: boolean;
}) {
  const router = useRouter();
  const handleClick = () => {
    if (isBack) {
      router.back();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  );
}
