"use client";

import {
  ReactNode,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type TSong = {
  songName: string;
  songArtist: string;
  imageSrc: string;
  audioSrc: string;
} | null;

const DEMO_SONG = {
  songName: "Song Title Name",
  songArtist: "Artist",
  imageSrc: "https://sandpack-bundler.vercel.app/img/take-it-easy.png",
  audioSrc:
    "https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3",
};

type MediaPlayerContextValues = {
  selectedSong: TSong;
  audioRef: RefObject<HTMLAudioElement> | null;
  isPlaying: boolean;
  volume: number;
  togglePlayback: () => void;
};

const MediaPlayerContext = createContext<MediaPlayerContextValues | null>(null);

type MediaPlayerProviderProps = {
  children: ReactNode;
};

function MediaPlayerProvider({ children }: MediaPlayerProviderProps) {
  const [selectedSong, setSelectedSong] = useState<TSong>(DEMO_SONG);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current !== null) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  const togglePlayback = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <MediaPlayerContext.Provider
      value={{ selectedSong, audioRef, isPlaying, volume, togglePlayback }}
    >
      {children}
    </MediaPlayerContext.Provider>
  );
}

function useMediaPlayer() {
  const data = useContext(MediaPlayerContext);

  if (!data) {
    throw new Error("Must use inside MediaPlayerProvider");
  }

  return data;
}

export { MediaPlayerProvider, useMediaPlayer };
