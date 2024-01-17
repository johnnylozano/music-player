import { listSongs } from "@/graphql/queries";
import { client } from "@/config";
import { Suspense } from "react";
import { SearchResultCard, SearchResultCardSkeleton } from "@/components";
import { range } from "@/lib/utils";

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
      <Suspense
        fallback={range(8).map((index) => (
          <SearchResultCardSkeleton key={index} />
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
