"use client";
import { useMediaPlayer } from "@/features/media-player/context";
import { usePlaylist } from "@/features/playlist";
import { TSong } from "@/lib/types";
import { GetUrlOutput, getUrl } from "aws-amplify/storage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdPlayArrow } from "react-icons/md";

function SongCard({ song }: { song: TSong }) {
  const { setSongById } = usePlaylist();
  const { isPlaying, togglePlayback } = useMediaPlayer();

  function handleClick(songId: string) {
    setSongById(songId);
    if (!isPlaying) {
      togglePlayback();
    }
  }

  return (
    <div
      onClick={() => handleClick(song!.id)}
      className="max-w-[300px] rounded-2xl p-6 overflow-hidden shadow-lg shadow-black/30 bg-zinc-700/50 hover:bg-emerald-800 transition-all hover:cursor-pointer duration-300 relative group"
    >
      <CardImage song={song} />
      <div className="bg-green-500 hover:bg-green-400 hover:scale-105 p-4 shadow-lg shadow-black/65 grid items-center rounded-full absolute transition-all duration-300 top-2/3 left-3/4 text-black/90 opacity-0 group-hover:opacity-100 transform -translate-x-1/2 translate-y-1/2 group-hover:-translate-y-[35%]">
        <MdPlayArrow className="w-10 h-10" aria-hidden="true" />
      </div>
      <div className="py-4">
        <div className="font-bold text-xl text-gray-200 mt-2 mb-2">
          {song?.songName}
        </div>
        <p className="text-gray-300/90 text-base -mb-1.5">{song?.songArtist}</p>
      </div>
    </div>
  );
}

function CardImage({ song }: { song: TSong }) {
  const [image, setImage] = useState<GetUrlOutput | null>(null);

  async function fetchImage(key: string) {
    const imageUrl = await getUrl({ key: key });
    setImage(imageUrl);
  }

  useEffect(() => {
    if (!song) return;
    fetchImage(song.imageSrc);
  }, [song]);

  if (!image?.url?.href) {
    return (
      <>
        <div className="w-full h-64 bg-gray-500 rounded-xl" />
      </>
    );
  }

  return (
    <Image
      className="w-full rounded-xl shadow-lg shadow-black/65"
      src={image.url.href}
      alt={`Album art for ${song?.songName}`}
      priority={true}
      width={350}
      height={350}
    />
  );
}

export { SongCard };
