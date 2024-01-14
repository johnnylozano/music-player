"use client";

import { useSidebarToggle } from "@/context";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

function Navbar() {
  const { toggleSidebar } = useSidebarToggle();

  return (
    <header className="from-emerald-950 to-black bg-gradient-to-t h-12 flex items-center justify-start  gap-3">
      <Button
        size="icon"
        variant="ghost"
        onClick={toggleSidebar}
        className="ml-4 group"
      >
        <HamburgerMenuIcon className="h-6 w-6 text-white group-hover:text-black" />
      </Button>
      <p
        className={`text-emerald-100/95 text-lg font-semibold ${orbitron.className}`}
      >
        Music Player
      </p>
    </header>
  );
}

export { Navbar };
