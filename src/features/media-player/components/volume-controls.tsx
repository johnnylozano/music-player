"use client";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { SpeakerLoudIcon, SpeakerOffIcon } from "@radix-ui/react-icons";
import { useMediaPlayer } from "../context/media-player-context";

function VolumeControls() {
  const { volume, adjustVolume, isMuted, toggleMuted } = useMediaPlayer();
  const MuteIcon = isMuted ? SpeakerOffIcon : SpeakerLoudIcon;

  return (
    <div className="flex-1 flex items-center gap-3 justify-end">
      <button
        className="rounded-full p-3 hover:bg-white/25 transition-all duration-150"
        onClick={toggleMuted}
      >
        <MuteIcon className="w-4 h-4 text-white" />
      </button>
      <Slider
        className={cn("w-[30%] h-2")}
        min={0}
        max={1}
        step={0.01}
        value={[volume]}
        onValueChange={(values: number[]) => adjustVolume(values[0])}
      />
    </div>
  );
}

export { VolumeControls };
