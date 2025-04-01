"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ModalOverlay({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      router.back();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-30" onClick={handleOverlayClick}>
      <div>{children}</div>
    </div>
  );
}
