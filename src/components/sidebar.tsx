"use client";

import { useSidebarToggle } from "@/context/sidebar-context";
import { cn } from "@/lib/utils";
import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { SideNavLinks } from "./sidebar-nav-links";

function Sidebar() {
  const { isSidebarOpen } = useSidebarToggle();

  const isOpen = isSidebarOpen ? "translate-x-0" : "-translate-x-[300px]";

  return (
    <div
      className={cn(
        "transition-transform duration-300 ease-in-out z-10",
        isOpen
      )}
    >
      <div className="flex flex-col gap-2 bg-zinc-800 px-2 py-4 h-full w-52 fixed rounded-lg shadow-lg shadow-black/50">
        <SideNavLinks />
      </div>
    </div>
  );
}

export { Sidebar };
