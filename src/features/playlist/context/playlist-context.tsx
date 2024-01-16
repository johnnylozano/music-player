import { TSong } from "@/lib/types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type PlaylistContextValues = {
  selectedSong: TSong;
  skipNextSong: () => void;
  skipPreviousSong: () => void;
  setSongList: (songs: TSong[]) => void;
  setSongById: (songId: string) => void;
};

const PlaylistContext = createContext<PlaylistContextValues | null>(null);

function PlaylistProvider({ children }: { children: ReactNode }) {
  const [songList, setSongList] = useState<TSong[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    console.log("Logging index: ", currentSongIndex);
  }, [currentSongIndex]);

  const setSongById = (songId: string) => {
    if (!songList.length) return;

    const songIndex = songList.findIndex((song) => song?.id === songId);
    if (songIndex !== -1) {
      setCurrentSongIndex(songIndex);
    }
  };

  function skipPreviousSong() {
    setCurrentSongIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return songList.length - 1;
      }
    });
  }

  function skipNextSong() {
    setCurrentSongIndex((prevIndex) => {
      if (prevIndex < songList.length - 1) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  }

  const selectedSong = songList[currentSongIndex];

  return (
    <PlaylistContext.Provider
      value={{
        selectedSong,
        skipNextSong,
        skipPreviousSong,
        setSongList,
        setSongById,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}

function usePlaylist() {
  const data = useContext(PlaylistContext);

  if (!data) {
    throw new Error("Must use inside PlaylistProvider");
  }

  return data;
}

export { PlaylistProvider, usePlaylist };
