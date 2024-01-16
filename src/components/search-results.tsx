import { listSongs } from "@/graphql/queries";
import { client } from "@/config";
import { Suspense } from "react";
import { SearchResultCard, SearchResultCardSkeleton } from "@/components";
import { range } from "@/lib/utils";
import { Playlist } from "./playlist";

async function SearchResults({ query }: { query: string | string[] }) {
  const songData = await client.graphql({
    query: listSongs,
    variables: {
      filter: { songName: { contains: query as string } },
    },
  });
  const songList = songData.data.listSongs.items;

  console.log(query);

  return (
    <div className="flex flex-col gap-2 mt-12">
      <Playlist songs={songList} />
      <Suspense
        fallback={range(8).map(() => (
          <SearchResultCardSkeleton />
        ))}
      >
        {songList.map((song) => (
          <SearchResultCard key={song.id} song={song} />
        ))}
      </Suspense>
    </div>
  );
}

export { SearchResults };
