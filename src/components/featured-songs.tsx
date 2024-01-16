import { SongCard } from "@/components";
import { fetchSongList } from "@/lib/actions";
import { Playlist } from "./playlist";

async function FeaturedSongs() {
  const songs = await fetchSongList();

  return (
    <>
      <Playlist songs={songs} />
      {songs?.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </>
  );
}

export { FeaturedSongs };
