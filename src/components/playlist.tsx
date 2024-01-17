"use client";

import { usePlaylist } from "@/features/playlist";
import { TSong } from "@/lib/types";
import { useEffect } from "react";

function Playlist({ songs }: { songs: TSong[] }) {
  const { setSongList } = usePlaylist();

  useEffect(() => {
    setSongList(songs);
  }, [songs, setSongList]);

  return null;
}

export { Playlist };
