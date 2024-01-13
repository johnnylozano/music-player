"use client";

import { useSidebarToggle } from "@/context";

function Navbar() {
  const { toggleSidebar } = useSidebarToggle();

  return (
    <header className="from-emerald-950 to-black bg-gradient-to-t h-12">
      <button className="text-white" onClick={toggleSidebar}>
        hello
      </button>
    </header>
  );
}

export { Navbar };
