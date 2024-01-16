import { SongCard } from "@/components";
import { fetchSongList } from "@/lib/actions";

async function FeaturedSongs() {
  const songs = await fetchSongList();

  return (
    <>
      {songs?.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </>
  );
}

export { FeaturedSongs };
