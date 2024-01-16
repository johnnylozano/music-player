"use client";
import { SidebarProvider } from "./sidebar-context";
import { MediaPlayerProvider } from "@/features/media-player/context/media-player-context";
import { PlaylistProvider } from "@/features/playlist";
import { ReactNode } from "react";

function AppProvider({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <PlaylistProvider>
        <MediaPlayerProvider>{children}</MediaPlayerProvider>
      </PlaylistProvider>
    </SidebarProvider>
  );
}

export { AppProvider };
