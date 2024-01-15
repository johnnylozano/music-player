"use client";

import { useSidebarToggle } from "@/context";
import { Button } from "@/components/ui/button";
import { GearIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

function Navbar() {
  const { toggleSidebar } = useSidebarToggle();

  return (
    <header className="from-emerald-950 px-4 to-black bg-gradient-to-t h-12 flex items-center justify-between gap-3">
      <div className="flex gap-2 items-center">
        <button
          onClick={toggleSidebar}
          className="rounded-full p-2 hover:bg-white/25 transition-all duration-150"
        >
          <HamburgerMenuIcon className="h-5 w-5 text-white" />
        </button>
        <p
          className={`text-emerald-100/95 text-lg font-semibold cursor-default ${orbitron.className}`}
        >
          Music Player
        </p>
      </div>
      <button className="rounded-full p-2 hover:bg-white/25 transition-all duration-150">
        <GearIcon className="h-5 w-5 text-gray-200" />
      </button>
    </header>
  );
}

export { Navbar };
