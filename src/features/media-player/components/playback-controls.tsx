import { Slider } from "@/components/ui/slider";
import {
  PlayIcon,
  PauseIcon,
  TrackPreviousIcon,
  TrackNextIcon,
} from "@radix-ui/react-icons";

function PlaybackControls() {
  return (
    <div className="flex-1 flex flex-col justify-center h-full">
      <div className="mt-2 -mb-2 flex-1 flex gap-8 justify-center items-center">
        <TrackPreviousIcon className="w-6 h-6 text-white" />
        <div className="rounded-full bg-white/65 p-1.5">
          <PlayIcon className="w-6 h-6 text-black" />
        </div>
        <TrackNextIcon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 flex gap-3 justify-center items-center">
        <p className="text-white/70 text-xs">0:32</p>
        <Slider defaultValue={[0]} max={100} step={1} />
        <p className="text-white/70 text-xs">4:37</p>
      </div>
    </div>
  );
}

export { PlaybackControls };
