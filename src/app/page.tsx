import { SongCard } from "@/components";

const DEMO_SONG = {
  songName: "Take It Easy",
  songArtist: "Bvrnout ft. Mia Vaile",
  imageSrc: "https://sandpack-bundler.vercel.app/img/take-it-easy.png",
  audioSrc:
    "https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3",
};

export default function Home() {
  return (
    <main className="p-12">
      <p className="text-white text-4xl font-extrabold">Featured</p>

      <div className="flex flex-wrap mt-8">
        <SongCard song={DEMO_SONG} />
      </div>
    </main>
  );
}
