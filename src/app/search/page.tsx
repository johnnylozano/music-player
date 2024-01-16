import { SearchBar } from "@/components";
import { SearchResults } from "@/components/search-results";

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.query || "";

  return (
    <main className="p-12">
      <SearchBar />

      <SearchResults query={query} />
    </main>
  );
}
