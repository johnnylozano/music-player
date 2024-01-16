"use client";
import Image from "next/image";
import { useMediaPlayer } from "../context";
import { GetUrlOutput, getUrl } from "aws-amplify/storage";
import { useEffect, useState } from "react";

type TrackInfoProps = {
  imageSrc: string;
  songName: string;
  songArtist: string;
};

function TrackInfo() {
  const { selectedSong } = useMediaPlayer();

  const [image, setImage] = useState<GetUrlOutput | null>(null);

  async function fetchImage(key: string) {
    const imageUrl = await getUrl({ key: key });
    setImage(imageUrl);
  }

  useEffect(() => {
    if (!selectedSong) {
      return;
    }
    fetchImage(selectedSong.imageSrc);
  }, [selectedSong]);

  return (
    <div className="flex flex-1 gap-6">
      <div className="h-16">
        {image ? (
          <Image
            alt=""
            src={image.url.href ?? "#"}
            className="block w-auto h-full object-cover rounded-sm"
            width={325}
            height={325}
            priority={true}
          />
        ) : (
          <div className="h-full rounded-sm w-16 shadow-lg shadow-black/30 bg-zinc-700/50 animate-pulse"></div>
        )}
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
