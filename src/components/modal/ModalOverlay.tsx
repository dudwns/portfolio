"use client";

import { useEffect } from "react";

export default function ModalOverlay({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 z-30">
      <div>{children}</div>
    </div>
  );
}
