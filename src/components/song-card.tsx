import { TSong } from "@/lib/types";
import { getUrl } from "aws-amplify/storage";
import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";

function SongCard({ song }: { song: TSong }) {
  return (
    <div className="max-w-[300px] rounded-2xl p-6 overflow-hidden shadow-lg shadow-black/30 bg-zinc-700/50 hover:bg-emerald-800 transition-all hover:cursor-pointer duration-300 relative group">
      <CardImage song={song} />
      <div className="bg-green-500 p-4 shadow-lg shadow-black/65 grid items-center rounded-full absolute transition-all duration-300 top-2/3 left-3/4 text-black/90 opacity-0 group-hover:opacity-100 transform -translate-x-1/2 translate-y-1/2 group-hover:-translate-y-[35%]">
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

async function CardImage({ song }: { song: TSong }) {
  let imageUrl;

  if (song) {
    imageUrl = await getUrl({ key: song?.imageSrc });
  }

  if (!imageUrl?.url?.href) {
    return (
      <>
        <div className="w-full h-64 bg-gray-500 rounded-xl" />
      </>
    );
  }

  return (
    <Image
      className="w-full rounded-xl shadow-lg shadow-black/65"
      src={imageUrl.url.href}
      alt={`Album art for ${song?.songName}`}
      priority={true}
      width={350}
      height={350}
    />
  );
}

export { SongCard };
