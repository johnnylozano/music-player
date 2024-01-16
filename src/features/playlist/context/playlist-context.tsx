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
};

const DEMO_SONG_List = [
  {
    id: "test",
    songName: "Take It Easy",
    songArtist: "Bvrnout ft. Mia Vaile",
    imageSrc: "https://sandpack-bundler.vercel.app/img/take-it-easy.png",
    audioSrc:
      "https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3",
  },
  {
    id: "test2",
    songName: "Take It Easy 2",
    songArtist: "Bvrnout ft. Mia Vaile",
    imageSrc: "https://sandpack-bundler.vercel.app/img/take-it-easy.png",
    audioSrc:
      "https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3",
  },
  {
    id: "test3",
    songName: "Take It Easy 3",
    songArtist: "Bvrnout ft. Mia Vaile",
    imageSrc: "https://sandpack-bundler.vercel.app/img/take-it-easy.png",
    audioSrc:
      "https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3",
  },
];

const PlaylistContext = createContext<PlaylistContextValues | null>(null);

function PlaylistProvider({ children }: { children: ReactNode }) {
  const [songList, setSongList] = useState<TSong[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    console.log("Logging index: ", currentSongIndex);
  }, [currentSongIndex]);

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
      value={{ selectedSong, skipNextSong, skipPreviousSong, setSongList }}
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
