"use client";
import { Slider } from "@/components/ui/slider";

import {
  MdPlayArrow,
  MdPause,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import { useMediaPlayer } from "../context/media-player-context";
import { formatTime } from "@/lib/utils";

function PlaybackControls() {
  const {
    selectedSong,
    isPlaying,
    audioRef,
    elapsedTime,
    displayElapsedTime,
    remainingTime,
    duration,
    togglePlayback,
    handleSliderChange,
  } = useMediaPlayer();

  const PlayPauseIcon = isPlaying ? MdPause : MdPlayArrow;

  return (
    <div className="flex-1 flex flex-col justify-center h-full">
      <div className="mt-2 -mb-2 flex-1 flex gap-8 justify-center items-center">
        <button className="rounded-full p-1 hover:bg-white/25 transition-all duration-150">
          <MdSkipPrevious className="w-8 h-8 text-white" />
        </button>
        <button
          className="rounded-full bg-white/65 p-1 hover:bg-white/95 hover:scale-105 transition-all duration-200"
          onClick={togglePlayback}
        >
          <PlayPauseIcon className="w-7 h-7 text-black" />
        </button>
        <button className="rounded-full p-1 hover:bg-white/25 transition-all duration-150">
          <MdSkipNext className="w-8 h-8 text-white" />
        </button>
      </div>
      <div className="flex-1 flex gap-3 justify-center items-center">
        <p className="text-white/70 text-xs">
          {`${formatTime(displayElapsedTime)}` ?? "0:00"}
        </p>
        <Slider
          value={[elapsedTime]}
          max={duration}
          step={1}
          onValueChange={handleSliderChange}
        />
        <p className="text-white/70 text-xs">
          {`${formatTime(remainingTime)}` ?? "0:00"}
        </p>
        <audio
          ref={audioRef}
          src={selectedSong?.audioSrc}
          onEnded={togglePlayback}
        />
      </div>
    </div>
  );
}

export { PlaybackControls };
