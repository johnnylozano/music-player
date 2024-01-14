"use client";
import Image from "next/image";
import { useMediaPlayer } from "../context";

type TrackInfoProps = {
  imageSrc: string;
  songName: string;
  songArtist: string;
};

function TrackInfo() {
  const { selectedSong } = useMediaPlayer();

  return (
    <div className="flex flex-1 gap-6">
      <div className="h-16">
        <Image
          alt=""
          src={selectedSong?.imageSrc ?? "#"}
          className="block w-auto h-full object-cover rounded-sm"
          width={325}
          height={325}
        />
      </div>
      <div className="flex flex-col items-start -mt-1 justify-center">
        <p className="text-gray-200 text-base font-normal p-0 m-0">
          {selectedSong?.songName}
        </p>
        <p className="text-gray-200/75 text-sm font-medium p-0 m-0">
          {selectedSong?.songArtist}
        </p>
      </div>
    </div>
  );
}

export { TrackInfo };
