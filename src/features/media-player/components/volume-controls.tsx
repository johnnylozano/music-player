"use client";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { SpeakerLoudIcon, SpeakerOffIcon } from "@radix-ui/react-icons";
import { useMediaPlayer } from "../context/media-player-context";

function VolumeControls() {
  const { volume } = useMediaPlayer();

  return (
    <div className="flex-1 flex items-center gap-6 justify-end">
      <SpeakerLoudIcon className="w-4 h-4 text-white" />
      <Slider
        className={cn("w-[30%] h-2")}
        min={0}
        max={1}
        step={0.01}
        defaultValue={[volume]}
      />
    </div>
  );
}

export { VolumeControls };
