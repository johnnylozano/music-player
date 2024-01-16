function SongCardSkeleton() {
  return (
    <div className="max-w-[300px] w-full rounded-2xl p-6 overflow-hidden shadow-lg shadow-black/30 bg-zinc-700/50 animate-pulse">
      <div className="w-full h-64 bg-gray-500 rounded-xl"></div>
      <div className="mt-8">
        <div className="h-8 bg-gray-500 rounded"></div>
        <div className="mt-2 h-4 bg-gray-500 rounded w-3/4"></div>
      </div>
    </div>
  );
}

function SearchResultCardSkeleton() {
  return (
    <div className="flex items-center bg-black/60 p-3 rounded-lg shadow shadow-black/20 animate-pulse">
      <div className="flex-shrink-0 h-12 w-12 bg-gray-700 rounded-md"></div>
      <div className="ml-4 flex-1">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export { SongCardSkeleton, SearchResultCardSkeleton };
