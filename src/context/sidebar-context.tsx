"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type SidebarContext = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContext | null>(null);

type SidebarProviderProps = {
  children: ReactNode;
};

function SidebarProvider({ children }: SidebarProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

function useSidebarToggle() {
  const data = useContext(SidebarContext);

  if (!data) {
    throw new Error("Must use useSidebarToggle inside of SidebarProvider");
  }

  return data;
}

export { SidebarProvider, useSidebarToggle };
