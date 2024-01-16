"use server";

import { client } from "@/config";
import { listSongs } from "@/graphql/queries";

async function fetchSongList() {
  const songData = await client.graphql({ query: listSongs });
  const songList = songData.data.listSongs.items;

  return songList;
}

export { fetchSongList };
