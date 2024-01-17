"use client";
import { cn } from "@/lib/utils";
import { HomeIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const links = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Search",
    href: "/search",
    icon: MagnifyingGlassIcon,
  },
];

function SideNavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "flex p-4 bg-zinc-700 shadow-lg shadow-black/40 rounded-md items-center gap-4 transition-all duration-150 hover:bg-zinc-500/75",
              {
                "ring-1 ring-green-500 bg-emerald-900 scale-105":
                  pathname === link.href,
              }
            )}
          >
            <LinkIcon
              className={cn("w-6 h-6 text-gray-300", {
                "text-white": pathname === link.href,
              })}
            />
            <p
              className={cn(
                "font-bold text-gray-300 cursor-pointer",
                {
                  "text-white": pathname === link.href,
                },
                orbitron.className
              )}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}

export { SideNavLinks };
