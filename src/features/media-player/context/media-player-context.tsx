"use client";

import { usePlaylist } from "@/features/playlist";
import { TSong } from "@/lib/types";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import { generateClient } from "aws-amplify/api";

import { GetUrlOutput, getUrl } from "aws-amplify/storage";
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

const DEMO_SONG = {
  id: "test",
  songName: "Take It Easy",
  songArtist: "Bvrnout ft. Mia Vaile",
  imageSrc: "https://sandpack-bundler.vercel.app/img/take-it-easy.png",
  audioSrc:
    "https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3",
};

type MediaPlayerContextValues = {
  selectedSong: TSong;
  audioSrc: GetUrlOutput | null;
  audioRef: RefObject<HTMLAudioElement> | null;
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  elapsedTime: number;
  displayElapsedTime: number;
  remainingTime: number;
  duration: number;
  togglePlayback: () => void;
  adjustVolume: (newVolume: number) => void;
  toggleMuted: () => void;
  handleSliderChange: (values: number[]) => void;
  skipPrevious: () => void;
  skipNext: () => void;
};

const MediaPlayerContext = createContext<MediaPlayerContextValues | null>(null);

type MediaPlayerProviderProps = {
  children: ReactNode;
};

function MediaPlayerProvider({ children }: MediaPlayerProviderProps) {
  Amplify.configure(config);

  const client = generateClient();
  const { selectedSong, skipNextSong, skipPreviousSong } = usePlaylist();

  const [audioSrc, setAudioSrc] = useState<GetUrlOutput | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [isMuted, setIsMuted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [displayElapsedTime, setDisplayElapsedTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  async function fetchAudio(key: string) {
    const audioUrl = await getUrl({ key: key });
    setAudioSrc(audioUrl);
  }

  useEffect(() => {
    if (audioSrc && isPlaying) {
      audioRef?.current?.play();
    }
  }, [audioSrc]);

  useEffect(() => {
    if (!selectedSong?.audioSrc) {
      return;
    }
    fetchAudio(selectedSong.audioSrc);
  }, [selectedSong]);

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

  useEffect(() => {
    if (audioRef.current !== null) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    function handleLoadedMetadata() {
      if (audioRef.current !== null) {
        const duration = audioRef.current.duration;
        setDuration(duration);
        setElapsedTime(0);
      }
    }

    if (audioRef.current !== null) {
      audioRef.current.load(); // Ensures that audio triggers loadedmetadata
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (audioRef.current !== null) {
        audioRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, [selectedSong?.audioSrc]);

  useEffect(() => {
    function handleTimeUpdate() {
      if (audioRef.current !== null) {
        const currentTime = audioRef.current.currentTime;
        setElapsedTime(currentTime);
        setDisplayElapsedTime(Math.floor(currentTime));
      }
    }

    if (audioRef.current !== null) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (audioRef.current !== null) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const togglePlayback = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const adjustVolume = useCallback(
    (newVolume: number) => {
      if (isMuted) {
        setIsMuted(false);
      }
      setVolume(newVolume);
    },
    [isMuted]
  );

  const toggleMuted = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  const handleSliderChange = useCallback((values: number[]) => {
    const newTime = values[0];
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  }, []);

  const skipPrevious = useCallback(() => {
    if (!audioRef.current) {
      return;
    }

    if (audioRef.current.currentTime < 2) {
      skipPreviousSong();
    }
    audioRef.current.currentTime = 0;
  }, []);

  function skipNext() {
    skipNextSong();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }

  const songLength = duration;
  const remainingTime = songLength - displayElapsedTime;

  return (
    <MediaPlayerContext.Provider
      value={{
        selectedSong,
        audioSrc,
        audioRef,
        isPlaying,
        volume,
        elapsedTime,
        displayElapsedTime,
        remainingTime,
        duration,
        togglePlayback,
        handleSliderChange,
        adjustVolume,
        isMuted,
        toggleMuted,
        skipPrevious,
        skipNext,
      }}
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
