"use client";

import { useSidebarToggle } from "@/context/sidebar-context";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MainLayoutContainerProps = {
  children: ReactNode;
};

function MainLayoutContainer({ children }: MainLayoutContainerProps) {
  const { isSidebarOpen } = useSidebarToggle();

  const isOpen = isSidebarOpen ? "ml-52" : "-ml-4";

  return (
    <div
      className={cn(
        "relative transition-all duration-300 ease-in-out flex-1 bg-zinc-800 rounded-lg shadow-lg shadow-black/50",
        isOpen
      )}
    >
      {children}
    </div>
  );
}

export { MainLayoutContainer };
