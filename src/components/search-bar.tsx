"use client";
import { useSearchQuery } from "@/hooks";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function SearchBar() {
  const { searchParams, handleSearch } = useSearchQuery("query");

  return (
    <div className="flex hover:ring-1 hover:ring-white/35 focus-within:focus-within:ring-2 transition-all duration-100 focus-within:focus-within:ring-white items-center bg-zinc-900/70 hover:bg-zinc-800/70 rounded-full pl-4 pr-2 py-2 w-full max-w-md">
      <MagnifyingGlassIcon className="w-8 h-8 text-gray-400" />
      <span className="sr-only">Search...</span>
      <input
        className="bg-transparent text-lg border-none focus:outline-none text-white placeholder-gray-400 focus:ring-0 ml-3 w-full"
        type="text"
        placeholder="Search songs..."
        onChange={(event) => handleSearch(event.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}

export { SearchBar };
