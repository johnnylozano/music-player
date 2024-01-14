"use client";

import { useSidebarToggle } from "@/context";
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
        "relative transition-all duration-300 ease-in-out flex-1 bg-gray-700 rounded-lg shadow-md shadow-lime-400/[.10]",
        isOpen
      )}
    >
      {children}
    </div>
  );
}

export { MainLayoutContainer };
