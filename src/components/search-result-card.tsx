"use client";

import { TSong } from "@/lib/types";
import { GetUrlOutput, getUrl } from "aws-amplify/storage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdPlayArrow } from "react-icons/md";

function SearchResultCard({ song }: { song: TSong }) {
  const [image, setImage] = useState<GetUrlOutput | null>(null);

  async function fetchImage(key: string) {
    const imageUrl = await getUrl({ key: key });
    setImage(imageUrl);
  }

  useEffect(() => {
    if (!song) return;
    fetchImage(song.imageSrc);
  }, [song]);

  if (song === null || image === null) return;

  return (
    <div className="group flex items-center cursor-pointer bg-black/60 p-3 rounded-lg hover:bg-zinc-700/90 shadow shadow-black/20 transition-colors duration-150">
      <div className="flex-shrink-0 relative">
        <Image
          src={image.url.href}
          alt={`Album art for ${song.songName}`}
          width={50}
          height={50}
          className="rounded-md"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 rounded-md transition-opacity duration-150"></div>

        <MdPlayArrow className="w-8 h-8 text-white absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      </div>
      <div className="ml-4">
        <p className="text-white font-semibold">{song.songName}</p>
        <p className="text-gray-400 text-sm">{song.songArtist}</p>
      </div>
    </div>
  );
}

export { SearchResultCard };
