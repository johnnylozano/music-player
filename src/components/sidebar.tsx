"use client";

import { useSidebarToggle } from "@/context";
import { cn } from "@/lib/utils";

function Sidebar() {
  const { isSidebarOpen } = useSidebarToggle();

  const isOpen = isSidebarOpen ? "translate-x-0" : "-translate-x-[300px]";

  return (
    <div
      className={cn(
        "transition-transform duration-300 ease-in-out z-10 translate-x-0",
        isOpen
      )}
    >
      <div className="bg-blue-300 h-full w-52 fixed rounded-lg shadow-md shadow-lime-400/[.10]">
        <p className="text-white">Sidebar</p>
      </div>
    </div>
  );
}

export { Sidebar };
