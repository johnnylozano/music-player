import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { SpeakerLoudIcon, SpeakerOffIcon } from "@radix-ui/react-icons";

function VolumeControls() {
  return (
    <div className="flex-1 flex items-center gap-6 justify-end">
      <SpeakerLoudIcon className="w-4 h-4 text-white" />
      <Slider className={cn("w-[30%] h-2")} />
    </div>
  );
}

export { VolumeControls };
