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
        variant="outline"
        onClick={toggleSidebar}
        className="bg-emerald-600 rounded-lg border-emerald-500 shadow-emerald-800 ml-4"
      >
        <HamburgerMenuIcon className="h-4 w-4" />
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
