import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { MainLayoutContainer, Navbar, Sidebar } from "@/components";
import { AppProvider } from "@/context";
import { MediaPlayer } from "@/features/media-player";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Player App",
  description: "Music Player to listen to royalty free audio",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Shadcn",
    "Radix UI",
    "GraphQL",
    "AWS",
  ],
  authors: [
    {
      name: "Johnny Lozano",
    },
  ],
  creator: "Johnny Lozano",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <div className="min-h-screen flex flex-grow flex-col bg-black/[.925] ">
            <Navbar />

            <div className="flex-1 flex flex-col sm:flex-row m-4 gap-4">
              <Sidebar />
              <MainLayoutContainer>
                <div className="absolute inset-0 overflow-auto">{children}</div>
              </MainLayoutContainer>
            </div>

            <MediaPlayer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
