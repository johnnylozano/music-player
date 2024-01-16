import { listSongs } from "@/graphql/queries";
import { client } from "@/config";
import { Suspense } from "react";
import { getUrl } from "aws-amplify/storage";

export default async function Search() {
  const songData = await client.graphql({ query: listSongs });
  const songList = songData.data.listSongs.items;
  const song = songList[0];

  console.log(songList);

  const signedUrl = await getUrl({ key: song.audioSrc });
  const imageUrl = await getUrl({ key: song.imageSrc });

  //   console.log(signedUrl);
  //   console.log(imageUrl);

  return (
    <main className="p-12">
      <p className="text-white text-4xl font-extrabold">Search</p>

      <Suspense fallback={<p>Loading...</p>}>
        <span>{songList[0].songName}</span>
      </Suspense>
    </main>
  );
}
