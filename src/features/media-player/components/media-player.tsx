import { PlaybackControls } from "./playback-controls";
import { TrackInfo } from "./track-info";
import { VolumeControls } from "./volume-controls";

function MediaPlayer() {
  return (
    <div className="h-20  from-emerald-900 to-black bg-gradient-to-b w-full">
      <div className="flex flex-1 h-full items-center mx-10">
        <TrackInfo />
        <PlaybackControls />
        <VolumeControls />
      </div>
    </div>
  );
}

export { MediaPlayer };
