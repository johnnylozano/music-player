"use client";

import { useSidebarToggle } from "@/context";
import {
  GearIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Orbitron } from "next/font/google";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "./ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";

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
      <div className="flex gap-2 items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://github.com/johnnylozano/music-player"
                target="_blank"
                className="rounded-full p-2 hover:bg-white/25 transition-all duration-150"
              >
                <GitHubLogoIcon className="h-5 w-5 text-white" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Source Code</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Sheet>
          <SheetTrigger asChild>
            <button className="rounded-full p-2 hover:bg-white/25 transition-all duration-150">
              <GearIcon className="h-5 w-5 text-gray-200" />
            </button>
          </SheetTrigger>
          {/* @ts-expect-error */}
          <SheetContent className="bg-zinc-700/95">
            <SheetHeader>
              <SheetTitle className="text-gray-200">
                Keyboard Shortcuts
              </SheetTitle>
              <div className="p-2 rounded-lg bg-zinc-900/65 shadow-inner shadow-black/70">
                <span className="mt-4 text-gray-300 text-sm font-medium flex justify-between">
                  Toggle Play/Pause
                  <kbd className="bg-zinc-800 border shadow shadow-gray-200/10 border-white/25 px-1.5 rounded flex-none">
                    Ctrl + Space
                  </kbd>
                </span>
                <span className="mt-4 text-gray-300 text-sm font-medium flex justify-between">
                  Toggle Mute
                  <kbd className="bg-zinc-800 border shadow shadow-gray-200/10 border-white/25 px-1.5 rounded flex-none">
                    Ctrl + M
                  </kbd>
                </span>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export { Navbar };
